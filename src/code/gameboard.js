import Ship from './ship';

const Gameboard = () => {
  let board = Array(10)
    .fill()
    .map(() => Array(10).fill(0));
  let ships = {}; // object to track ships by ID

  const getBoard = () => board;

  const getShipByID = (id) => {
    return ships[id];
  };

  const placeShip = (ship, x, y) => {
    if (outsideBoard(ship, x, y))
      throw new Error('Cant place ship outside of 10x10 board!');

    if (squareOccupied(ship, x, y)) throw new Error('square already occupied!');

    if (board[x][y] === 0 && ship.getLength() === 1) board[x][y] = ship.getID();

    if (board[x][y] === 0 && ship.getLength() > 1) {
      if (ship.getAxis() === 'x')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x + i][y] = ship.getID();
        }
      if (ship.getAxis() === 'y')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x][y + i] = ship.getID();
        }
    }
    ships[ship.getID()] = ship;
  };

  const shipPlaced = (shipId) => {
    let placed = false;
    let board = getBoard();
    
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === shipId) { // Check if the cell contains the shipId
          placed = true;
          break; // Stop searching once shipId is found
        }
      }
      if (placed) {
        break; // Break the outer loop if shipId is found
      }
    }
    
    return placed;
  };

  const isOccupied = (x, y) => {
    return board[x][y] !== 0;
  };

  const outsideBoard = (ship, x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return true;
    if (ship.getAxis() === 'x' && x + ship.getLength() > 10) return true;
    if (ship.getAxis() === 'y' && y + ship.getLength() > 10) return true;

    return false;
  };

  const squareOccupied = (ship, x, y) => {
    if (ship.getAxis() === 'x') {
      if (x + ship.getLength() > 10) return true;
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x + i][y] !== 0) {
          return true; // Square is occupied
        }
      }
    } else if (ship.getAxis() === 'y') {
      if (y + ship.getLength() > 10) return true;
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x][y + i] !== 0) {
          return true; // Square is occupied
        }
      }
    }
    return false; // No squares are occupied
  };

  const squareAttacked = (x, y) => {
    return (board[x][y] === 'x'); 
  };

  const receiveAttack = (x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10)
      throw new Error('Cannot attack outside of 10x10 board!');

    if (squareAttacked(x, y)) throw new Error('Square is already attacked!');

    if (board[x][y] === 0) {
      board[x][y] = 'x'; // Mark as missed attack
      return;
    }
    // Assuming board[x][y] contains a ship ID for a hit
    const shipID = board[x][y];
    const ship = getShipByID(shipID);
    ship.hit();
    board[x][y] = 'x'; // Mark as attacked
  };

  const allShipsAreSunk = () => {
    return Object.values(ships).every((ship) => ship.isSunk());
  };

  const generateComputerShips = () => {
    const ships = {
      0: Ship(5, 0),
      1: Ship(4, 1),
      2: Ship(4, 2),
      3: Ship(3, 3),
      4: Ship(2, 4)
    };

    for (const key in ships) {
      const ship = ships[key];
      const randomNum = Math.floor(Math.random() * 2);
      if (randomNum == 1) {
        ship.rotateShip();
      }
    } 
    return ships;
  };

  const placeComputerShips = () => {
    const ships = generateComputerShips();
    for (const key in ships) {
        const ship = ships[key];
        let randomX, randomY;

        do {
            randomX = Math.floor(Math.random() * (ship.getAxis() === 'x' ? 10 - ship.getLength() : 10));
            randomY = Math.floor(Math.random() * (ship.getAxis() === 'y' ? 10 - ship.getLength() : 10));
        } while (squareOccupied(ship, randomX, randomY));

        placeShip(ship, randomX, randomY);
    }
};
  
 
  const resetBoard = () => {
    board = Array(10)
      .fill()
      .map(() => Array(10).fill(0));

    ships = {};
  };

  return {
    placeShip,
    isOccupied,
    getBoard,
    receiveAttack,
    allShipsAreSunk,
    resetBoard,
    squareAttacked,
    shipPlaced,
    placeComputerShips
  };
};

export default Gameboard;