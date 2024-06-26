import helper from './helper';
import PlaceShips from './placeShips';
import Game from '../code/game';
import winnerModal from './winnerModal';

const Combat = (() => {
  const getPlayerGrid = () => {
    return PlaceShips.getClonedGrid();
  };

  const loadCombatContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');

    content.append(loadBattleCard());
    Game.initComputerBoard();

    const compGrid = document.getElementById('computer-grid');
    const computerSquares = compGrid.querySelectorAll('.grid-square');
    computerSquares.forEach((square) => {
      square.addEventListener('click', () => {
        if (
          !square.classList.contains('missed-square') &&
          !square.classList.contains('attacked-square')
        ) {
          attackSquare(square);
        }
        if (Game.gameOver()) {
          content.appendChild(winnerModal.loadWinnerModal());
          winnerModal.initTypingEffectWinner();
        }
      });
    });
  };

  const loadBattleCard = () => {
    const battleSection = helper.create('section', {
      className: 'battle-card',
    });

    battleSection.append(loadPlayerSide(), loadComputerSide());

    return battleSection;
  };

  const loadPlayerSide = () => {
    const playerSide = helper.create('section', { className: 'player-side' });
    const playerHeader = helper.create('div', {
      className: 'player-header',
      textContent: 'FRIENDLY WATERS',
    });
    playerSide.classList.add('player-side');

    playerSide.append(playerHeader, getPlayerGrid());
    return playerSide;
  };

  const loadComputerSide = () => {
    const computerSide = helper.create('section', {
      className: 'computer-side',
    });
    const computerHeader = helper.create('div', {
      className: 'computer-header',
      textContent: 'ENEMY WATERS',
    });
    const computerGrid = helper.loadGridSquare();
    computerGrid.lastChild.classList.add('computer-grid');
    computerGrid.lastChild.id = 'computer-grid';
    computerSide.classList.add('computer-side');

    computerSide.append(computerHeader, computerGrid);

    return computerSide;
  };

  const attackSquare = (square) => {
    let xAxis = parseInt(square.id.charAt(0), 10);
    let yAxis = parseInt(square.id.charAt(1), 10);
    const computerBoard = Game.getComputerBoard();

    // Play the turn before checking the results
    Game.playTurn(xAxis, yAxis);
    console.log(computerBoard.getBoard());

    // Now check if the attack was a hit or miss
    if (computerBoard.squareAttacked(xAxis, yAxis)) {
      square.classList.add('attacked-square');
      displaySunkenEnemyShips(computerBoard);
    }
    if (computerBoard.missedAttack(xAxis, yAxis)) {
      square.classList.add('missed-square');
    }

    displayComputerAttack();
  };

  const displayComputerAttack = () => {
    const playerGrid = getPlayerGrid();
    const playerSquares = playerGrid.querySelectorAll('.grid-square');
    const playerBoard = Game.getPlayerBoard();

    playerSquares.forEach((square) => {
      let xAxis = parseInt(square.id.charAt(0), 10);
      let yAxis = parseInt(square.id.charAt(1), 10);

      if (playerBoard.squareAttacked(xAxis, yAxis)) {
        square.classList.add('attacked-square');
      }
      if (playerBoard.missedAttack(xAxis, yAxis)) {
        square.classList.add('missed-square');
      }
    });
  };

  const displaySunkenEnemyShips = (enemyBoard) => {
    let enemyShips = enemyBoard.getShips();
    Object.values(enemyShips).forEach((ship) => {
      if (ship.isSunk()) {
        let startSquare = ship.getStartSquare();
        let shipName = helper.ships[ship.getID() - 1].name;
        let shipLength = helper.ships[ship.getID() - 1].length;
        let shipAxis = ship.getAxis();
        if (shipAxis === 'x') {
          shipAxis = 'y';
        } else if (shipAxis === 'y') {
          shipAxis = 'x';
        }
        let computerGrid = document.getElementById('computer-grid');

        helper.placeShipIcon(
          computerGrid,
          startSquare,
          shipName,
          shipAxis,
          shipLength,
        );
      }
    });
  };

  return { loadCombatContent };
})();

export default Combat;
