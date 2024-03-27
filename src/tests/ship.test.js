const testShip = require('../code/ship');

describe('ship factory function', () => {
  it('ship length correct', () => {
    expect(testShip(3).getLength()).toBe(3);
  });

  it('throws an error if ship length is too large', () => {
    expect(() => testShip(6)).toThrow(
      'Invalid ship length: Length must be between 1 and 5.',
    );
  });

  it('throws an error if ship length is too small', () => {
    expect(() => testShip(0)).toThrow(
      'Invalid ship length: Length must be between 1 and 5.',
    );
  });

  it('ship gets sunk', () => {
    const newShip = testShip(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();

    expect(newShip.isSunk()).toBe(true);
  });

  it('ship rotate works', () => {
    const newShip = testShip(3);
    const anotherShip = testShip(3);
    newShip.rotateShip();
    expect(newShip.getAxis()).toBe('y');
    expect(anotherShip.getAxis()).toBe('x');
  });
});
