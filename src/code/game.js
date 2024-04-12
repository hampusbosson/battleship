const player = require('../code/player');
const gameBoard = require('../code/gameboard');
import PlaceShips from '../dom/placeShips';

const Game = (() => {
    const playerBoard = PlaceShips.getPlayerBoard();
    const computerBoard = gameBoard();
    const newPlayer = player(playerBoard);

    const gameOver = () => {
        return playerBoard.allShipsAreSunk() || computerBoard.allShipsAreSunk();
    };

    const gameWinner = () => {
        if (playerBoard.allShipsAreSunk()) {
            return 'player';
        } else if (computerBoard.allShipsAreSunk()) {
            return 'computer';
        }
    };

    const playTurn = (x, y) => {
        if (!gameOver()) {
            newPlayer.attack(computerBoard, x, y);
            newPlayer.computerAttack(playerBoard);
        } 
    };

    const resetBoards = () => {
        playerBoard.resetBoard();
        computerBoard.resetBoard();
    };


    return { playTurn, gameWinner, resetBoards };
})();

export default Game;