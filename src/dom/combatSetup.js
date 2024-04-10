import helper from './helper';
import PlaceShips from './placeShips';
import SetupModal from './setupModal';

const CombatSetup = (() => {
  let activeAxis = 'x';

  const getActiveAxis = () => activeAxis;

  const loadSetupContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');
    content.append(SetupModal.loadSetupModal(), loadGameboard());
    SetupModal.initTypingEffect();

    PlaceShips.shipBoxSelector();
    PlaceShips.placeShip();
  };

  const loadGameboard = () => {
    const setupContainer = helper.create('div', {
      className: 'setup-container',
    });
    const setupBoard = helper.create('div', { className: 'setup-board' });

    setupBoard.append(
      loadTopButtons(),
      helper.loadGridSquare(),
      loadBottomButtons(),
    );
    setupContainer.append(setupBoard, loadFleet());

    return setupContainer;
  };

  const loadTopButtons = () => {
    const buttonBox = helper.create('div', { className: 'setup-top-btns' });

    buttonBox.append(buttons.xAxisBtn, buttons.yAxisBtn);

    buttons.xAxisBtn.classList.add('axis-highlight');

    const removeHighlightFromAllButtons = () => {
      buttons.xAxisBtn.classList.remove('axis-highlight');
      buttons.yAxisBtn.classList.remove('axis-highlight');
    };

    buttons.xAxisBtn.addEventListener('click', () => {
      removeHighlightFromAllButtons();
      buttons.xAxisBtn.classList.add('axis-highlight');
      activeAxis = 'x';
      PlaceShips.updateGridHighlights();
    });

    buttons.yAxisBtn.addEventListener('click', () => {
      removeHighlightFromAllButtons();
      buttons.yAxisBtn.classList.add('axis-highlight');
      activeAxis = 'y';
      PlaceShips.updateGridHighlights();
    });

    return buttonBox;
  };

  const loadFleet = () => {
    const fleetContainer = helper.create('div', {
      className: 'fleet-container',
    });

    for (let i = 0; i < 5; i++) {
      let shipBox = helper.create('div', {
        className: 'ship-box',
        id: i,
      });
      let shipText = helper.create('div', {
        textContent: helper.shipNames[i],
        className: 'ship-text',
      });
      let shipIcon = helper.create('img', {
        src: helper.shipIcons[i],
        className: 'ship-icon',
      });
      shipBox.append(shipIcon, shipText);
      fleetContainer.appendChild(shipBox);
    }

    return fleetContainer;
  };

  const loadBottomButtons = () => {
    const buttonBox = helper.create('dic', { className: 'setup-bottom-btns' });

    buttonBox.append(buttons.resetBtn, buttons.confirmBtn);

    buttons.resetBtn.addEventListener('click', () => {
      resetPage();
      const playerBoard = PlaceShips.getPlayerBoard();
      playerBoard.resetBoard();
      loadFleet();
    });

    return buttonBox;
  };

  const buttons = {
    xAxisBtn: helper.create('button', {
      className: 'setup-btn',
      id: 'xAxis-btn',
      textContent: 'X axis',
    }),
    yAxisBtn: helper.create('button', {
      className: 'setup-btn',
      id: 'yAxis-btn',
      textContent: 'Y axis',
    }),
    resetBtn: helper.create('button', {
      className: 'setup-btn',
      id: 'reset-btn',
      textContent: 'Reset',
    }),
    confirmBtn: helper.create('button', {
      className: 'setup-btn',
      id: 'confirm-btn',
      textContent: 'Confirm',
    }),
  };

  const resetPage = () => {
    helper.resetGameboardGrid();
    activeAxis = 'x';
    const yAxisBtn = document.getElementById('yAxis-btn');
    const xAxisBtn = document.getElementById('xAxis-btn');
    yAxisBtn.classList.remove('axis-highlight');
    xAxisBtn.classList.add('axis-highlight');

    const shipBoxes = document.querySelectorAll('.ship-box');
    shipBoxes.forEach((box) => {
      box.firstChild.classList.remove('ship-icon-placed');
      box.lastChild.classList.remove('ship-text-placed');
      box.classList.remove('ship-box-placed');
    });
  };

  return {
    loadSetupContent,
    getActiveAxis,
  };
})();

export default CombatSetup;
