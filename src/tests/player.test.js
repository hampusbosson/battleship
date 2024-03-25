const testShip = require('../code/ship');
const gameboard = require('../code/gameboard');
const player = require('../code/player'); 

describe('Player factory function', () => {
    it('Player attack attack is answered with computer attack', () => {
        const playerGameBoard = gameboard();
        const enemyGameBoard = gameboard(); 
        const newPlayer = player(playerGameBoard); 
        const ship = testShip(4, 1); 
        const ship2 = testShip(2, 2); 
        const ship3 = testShip(3, 3);
        const ship4 = testShip(1, 4);
        playerGameBoard.placeShip(ship, 5, 5);
        playerGameBoard.placeShip(ship2, 1, 1); 
        enemyGameBoard.placeShip(ship3, 3, 3);
        enemyGameBoard.placeShip(ship4, 7, 8); 
        
        newPlayer.attack(enemyGameBoard, 3, 4);

        const playerBoardIsAttacked = () => {
            const board = playerGameBoard.getBoard(); 

            return board.some(row => row.some(cell => cell !== 0)); 
        };

        expect(playerBoardIsAttacked()).toBe(true); 
    });
});