const testShip = require('../code/ship');
const gameboard = require('../code/gameboard');

describe('gameboard factory function', () => {
  it('cant give coordinates outside of board', () => {
    expect(() => gameboard().placeShip(testShip(1), 11, 4)).toThrow(
      'Cant place ship outside of 10x10 board!',
    );
  });

  it('place ship with length 1 makes square occupied', () => {
    const newShip = testShip(1);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 5, 5);
    expect(newGameBoard.isOccupied(5, 5)).toBe(true);
  });

  it('place ship with length greater than 1 makes all squares occupied', () => {
    const newShip = testShip(4);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 1, 5);
    expect(newGameBoard.isOccupied(4, 5)).toBe(true);
  });

  it('cant place ship with length 1 on occupied square', () => {
    const newShip = testShip(1); 
    const newGameBoard = gameboard(); 
    newGameBoard.placeShip(newShip, 4, 4);
    expect(() => newGameBoard.placeShip(testShip(1), 4, 4)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship with length greater than one on occupied squares on x-axis', () => {
    const newShip = testShip(4); 
    const newGameBoard = gameboard(); 
    newGameBoard.placeShip(newShip, 4, 4);
    expect(() => newGameBoard.placeShip(testShip(3), 2, 4)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship with length greater than one on occupied squares on y-axis', () => {
    const newShip = testShip(3); 
    newShip.rotateShip();
    const newGameBoard = gameboard(); 
    newGameBoard.placeShip(testShip(4), 1, 4);
    expect(() => newGameBoard.placeShip(newShip, 2, 2)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship outside of board on x-axis', () => {
    expect(() => gameboard().placeShip(testShip(4), 7, 4)).toThrow(
        'Cant place ship outside of 10x10 board!',
      );
  });

  it('cant place ship outside of board on y-axis', () => {
    const newShip = testShip(4);
    newShip.rotateShip();
    expect(() => gameboard().placeShip(newShip, 4, 8)).toThrow(
        'Cant place ship outside of 10x10 board!',
      );
  });

});
