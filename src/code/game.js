import Player from './player';
import Gameboard from './gameboard';
import PlaceShips from '../dom/placeShips';

const Game = (() => {
    const playerBoard = PlaceShips.getPlayerBoard();
    const computerBoard = Gameboard();
    const newPlayer = Player(playerBoard);

    const gameOver = () => {
        return playerBoard.allShipsAreSunk() || computerBoard.allShipsAreSunk();
    };

    const initComputerBoard = () => {
        computerBoard.placeComputerShips();
        console.log(computerBoard.getBoard());
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


    return { playTurn, gameWinner, resetBoards, initComputerBoard };
})();

export default Game;