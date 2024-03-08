const Gameboard = () => {
  let board = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

  //const getBoard = () => board;

  const placeShip = (ship, x, y) => {
    if (outsideBoard(ship, x, y))
      throw new Error('Cant place ship outside of 10x10 board!');

    if (squareOccupied(ship, x, y)) throw new Error('square already occupied!');

    if (board[x][y] === 0 && ship.getLength() === 1) board[x][y] = 1;

    if (board[x][y] === 0 && ship.getLength() > 1) {
      if (ship.getAxis() === 'x')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x + i][y] = 1;
        }
      if (ship.getAxis() === 'y')
        for (let i = 0; i < ship.getLength(); i++) {
          board[x][y + i] = 1;
        }
    }
  };

  const isOccupied = (x, y) => {
    return board[x][y] === 1;
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
        if (board[x + i][y] === 1) {
          return true; // Square is occupied
        }
      }
    } else if (ship.getAxis() === 'y') {
      for (let i = 0; i < ship.getLength(); i++) {
        if (board[x][y + i] === 1) {
          return true; // Square is occupied
        }
      }
    }
    return false; // No squares are occupied
  };

  return {
    placeShip,
    isOccupied,
  };
};

module.exports = Gameboard;
