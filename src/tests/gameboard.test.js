const testShip = require('../code/ship');
const gameboard = require('../code/gameboard');

describe('gameboard factory function', () => {
  it('cant give coordinates outside of board', () => {
    expect(() => gameboard().placeShip(testShip(1), 11, 4)).toThrow(
      'Cant place ship outside of 10x10 board!',
    );
  });

  it('place ship with length 1 makes square occupied', () => {
    const newShip = testShip(1, 1);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 5, 5);
    expect(newGameBoard.isOccupied(5, 5)).toBe(true);
  });

  it('place ship with length greater than 1 makes all squares occupied', () => {
    const newShip = testShip(4, 1);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 1, 5);
    expect(newGameBoard.isOccupied(4, 5)).toBe(true);
  });

  it('cant place ship with length 1 on occupied square', () => {
    const newShip = testShip(1, 1);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 4, 4);
    expect(() => newGameBoard.placeShip(testShip(1), 4, 4)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship with length greater than one on occupied squares on x-axis', () => {
    const newShip = testShip(4, 1);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newShip, 4, 4);
    expect(() => newGameBoard.placeShip(testShip(3), 2, 4)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship with length greater than one on occupied squares on y-axis', () => {
    const newShip = testShip(3, 1);
    //rotate ship to be placed on y-axis
    newShip.rotateShip();
    const newGameBoard = gameboard();
    newGameBoard.placeShip(testShip(4, 2), 1, 4);
    expect(() => newGameBoard.placeShip(newShip, 2, 2)).toThrow(
      'square already occupied!',
    );
  });

  it('cant place ship outside of board on x-axis', () => {
    expect(() => gameboard().placeShip(testShip(4, 1), 7, 4)).toThrow(
      'Cant place ship outside of 10x10 board!',
    );
  });

  it('cant place ship outside of board on y-axis', () => {
    const newShip = testShip(4, 1);
    newShip.rotateShip();
    expect(() => gameboard().placeShip(newShip, 4, 8)).toThrow(
      'Cant place ship outside of 10x10 board!',
    );
  });

  it('recieve attack saves hits on board', () => {
    const newBoard = gameboard();
    newBoard.receiveAttack(5, 3);
    newBoard.receiveAttack(2, 7);
    newBoard.receiveAttack(7, 9);
    const board = newBoard.getBoard();

    expect(board[5][3]).toBe('x');
    expect(board[2][7]).toBe('x');
    expect(board[7][9]).toBe('x');
  });

  it('recieve attack saves hits on individual ships', () => {
    const newBoard = gameboard();
    const newShip = testShip(4, 1);
    const anotherShip = testShip(3, 2);
    newBoard.placeShip(newShip, 4, 4);
    newBoard.placeShip(anotherShip, 2, 2);
    newBoard.receiveAttack(6, 4);
    newBoard.receiveAttack(3, 2);
    newBoard.receiveAttack(2, 2);

    expect(newShip.getHits()).toBe(1);
    expect(anotherShip.getHits()).toBe(2);
  });

  it('gameboard records wether or not all ships have been sunk', () => {
    const newBoard = gameboard();
    const newShip = testShip(4, 1);
    const anotherShip = testShip(3, 2);
    anotherShip.rotateShip();
    const thirdShip = testShip(2, 3);
    newBoard.placeShip(newShip, 4, 4);
    newBoard.placeShip(anotherShip, 1, 1);
    newBoard.placeShip(thirdShip, 7, 7);
    newBoard.receiveAttack(4, 4);
    newBoard.receiveAttack(5, 4);
    newBoard.receiveAttack(6, 4);
    newBoard.receiveAttack(7, 4);
    newBoard.receiveAttack(1, 1);
    newBoard.receiveAttack(1, 2);
    newBoard.receiveAttack(1, 3);
    newBoard.receiveAttack(7, 7);
    newBoard.receiveAttack(8, 7);

    expect(newBoard.allShipsAreSunk()).toBe(true);
  });

  it('resetBoard function resets the board to initial state', () => {
    const newBoard = gameboard();
    newBoard.placeShip(testShip(3), 0, 0);
    newBoard.receiveAttack(5, 5);
    newBoard.resetBoard();

    const board = newBoard.getBoard();
    const isReset = board.every((row) => row.every((cell) => cell === 0));

    expect(isReset).toBe(true);
  });
});
