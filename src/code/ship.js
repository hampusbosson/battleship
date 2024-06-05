const Ship = (length, id) => {
  if (length > 5 || length < 1) {
    throw new Error('Invalid ship length: Length must be between 1 and 5.');
  }

  const ship = {
    length: length,
    hits: 0,
    sunk: false,
    axis: 'y',
    id: id + 1,
    startSquare: 0
  };

  const getLength = () => ship.length;

  const getAxis = () => ship.axis;

  const getID = () => ship.id;

  const getHits = () => ship.hits;

  const rotateShip = () => {
    if (ship.axis === 'x') {
      ship.axis = 'y';
    } else {
      ship.axis = 'x';
    }
  };

  const hit = () => {
    ship.hits++;
    if (ship.hits === ship.length) ship.sunk = true;
  };

  const isSunk = () => {
    return ship.sunk;
  };

  const setStartSquare = (startSquare) => {
    ship.startSquare = startSquare;
  };

  const getStartSquare = () => {
    return ship.startSquare;
  };

  return { getLength, getAxis, getID, getHits, hit, isSunk, rotateShip, setStartSquare, getStartSquare };
};

export default Ship;
