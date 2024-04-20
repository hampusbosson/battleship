import helper from './helper';
import PlaceShips from './placeShips';
import Game from '../code/game';

const Combat = (() => {
  const getPlayerGrid = () => { return PlaceShips.getClonedGrid(); };

  const loadCombatContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');

    content.append(loadBattleCard());
    Game.initComputerBoard();
    console.log(PlaceShips.getPlayerBoard().getBoard());

    const compGrid = document.getElementById('computer-grid');
    const computerSquares = compGrid.querySelectorAll('.grid-square');
    computerSquares.forEach(square => {
      square.addEventListener('click', () => {
        attackSquare(square);
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
    const playerHeader = helper.create('div', { className: 'player-header', textContent: 'FRIENDLY WATERS'} );
    playerSide.classList.add('player-side');

    playerSide.append(playerHeader, getPlayerGrid());/*helper.loadGridSquare())*/
    return playerSide;
  };

  const loadComputerSide = () => {
    const computerSide = helper.create('section', { className: 'computer-side' });
    const computerHeader = helper.create('div',  {className: 'computer-header', textContent: 'ENEMY WATERS' });
    const computerGrid = helper.loadGridSquare();
    computerGrid.lastChild.classList.add('computer-grid');
    computerGrid.lastChild.id = 'computer-grid';
    computerSide.classList.add('computer-side');

    computerSide.append(computerHeader, computerGrid);

    return computerSide;
  };

  const attackSquare = (square) => {
    square.classList.add('attacked-square');
    let xAxis = parseInt(square.id.charAt(0), 10);
    let yAxis = parseInt(square.id.charAt(1), 10);

    Game.playTurn(xAxis, yAxis);
    displayComputerAttack();
  };

  const displayComputerAttack = () => {
    const playerGrid = getPlayerGrid();
    const playerSquares = playerGrid.querySelectorAll('.grid-square');
    const playerBoard = Game.getPlayerBoard();
    
    playerSquares.forEach(square => {
      let xAxis = parseInt(square.id.charAt(0), 10);
      let yAxis = parseInt(square.id.charAt(1), 10);

      if(playerBoard.squareAttacked(xAxis, yAxis)) {
        square.classList.add('attacked-square');
      }
    });
  };



  return { loadCombatContent };
})();

export default Combat;
