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

  const getPlayerBoard = () => {
    return playerBoard;
  };

  const getComputerBoard = () => {
    return computerBoard;
  };

  const initComputerBoard = () => {
    computerBoard.placeComputerShips();
    console.log(computerBoard.getBoard());
  };

  const gameWinner = () => {
    if (playerBoard.allShipsAreSunk()) {
      return 'COMPUTER';
    } else if (computerBoard.allShipsAreSunk()) {
      return 'PLAYER';
    }
  };

  const playTurn = (x, y) => {
    if (!gameOver()) {
      newPlayer.attack(computerBoard, x, y);
    } else {
      console.log(`Game over! Winner is ${gameWinner()}`);
    }
  };

  const resetBoards = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
  };

  return {
    playTurn,
    gameWinner,
    resetBoards,
    initComputerBoard,
    getPlayerBoard,
    getComputerBoard,
    gameOver,
  };
})();

export default Game;
