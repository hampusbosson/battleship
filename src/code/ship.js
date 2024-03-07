const Ship = (length) => {
  if (length > 4 || length < 1) {
    throw new Error('Invalid ship length: Length must be between 1 and 4.');
  }

  const ship = {
    length: length,
    hits: 0,
    sunk: false,
    axis: 'x'
  };

  const getLength = () => ship.length; 

  const getAxis = () => ship.axis; 

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

  return { getLength, getAxis, hit, isSunk, rotateShip };
};

module.exports = Ship;
