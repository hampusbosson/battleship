const testShip = require('../code/ship');

describe('ship factory function', () => {
  it('ship length correct', () => {
    expect(testShip(3).getLength()).toBe(3);
  });

  it('throws an error if ship length is too large', () => {
    expect(() => testShip(5)).toThrow(
      'Invalid ship length: Length must be between 1 and 4.',
    );
  });

  it('throws an error if ship length is too small', () => {
    expect(() => testShip(0)).toThrow(
      'Invalid ship length: Length must be between 1 and 4.',
    );
  });

  it('ship gets sunk', () => {
    const newShip = testShip(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();

    expect(newShip.isSunk()).toBe(true);
  });
});
