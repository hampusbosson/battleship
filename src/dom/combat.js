import helper from './helper';
import PlaceShips from './placeShips';
const Combat = (() => {
  const loadCombatContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');

    content.append(loadBattleCard());
    console.log(PlaceShips.getPlayerBoard().getBoard());

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
    //const playerGrid = helper.loadGridSquare();
    playerSide.classList.add('player-side');

    playerSide.append(playerHeader, PlaceShips.getClonedGrid());
    return playerSide;
  };

  const loadComputerSide = () => {
    const computerSide = helper.create('section', { className: 'computer-side' });
    const computerHeader = helper.create('div',  {className: 'computer-header', textContent: 'ENEMY WATERS' });
    const computerGrid = helper.loadGridSquare();
    computerGrid.lastChild.classList.add('computer-grid');
    computerSide.classList.add('computer-side');

    computerSide.append(computerHeader, computerGrid);
    return computerSide;
  };

  return { loadCombatContent };
})();

export default Combat;
