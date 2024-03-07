const Ship = (length) => {
  if (length > 4 || length < 1) {
    throw new Error('Invalid ship length: Length must be between 1 and 4.');
  };

  const ship = {
    length: length,
    hits: 0,
    sunk: false,
  };

  const getLength = () => {
    return ship.length; 
  };

  const hit = () => {
    ship.hits++; 
    if (ship.hits === ship.length) 
      ship.sunk = true; 
  };
  
  const isSunk = () => {
    return ship.sunk; 
  };


  return { getLength, hit, isSunk };
};

module.exports = Ship; 
