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
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x + i][y] !== 0) {
          return true; // Square is occupied
        }
      }
    } else if (ship.getAxis() === 'y') {
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x][y + i] !== 0) {
          return true; // Square is occupied
        }
      }
    }
    return false; // No squares are occupied
  };

  const receiveAttack = (x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10)
      throw new Error('Cannot attack outside of 10x10 board!');

    if (board[x][y] === 'x') throw new Error('Square is already attacked!');

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
  };
};

module.exports = Gameboard;
