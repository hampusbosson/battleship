import helper from './helper';

const CombatSetup = (() => {
  const loadSetupContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');
    content.append(loadGameboard());    
  };

  const loadGameboard = () => {
    const setupContainer = helper.create('div', {
      className: 'setup-container',
    });
    const setupBoard = helper.create('div', { className: 'setup-board' });

    setupBoard.append(loadTopButtons(), helper.loadGridSquare(), loadBottomButtons());
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
    });
  
    buttons.yAxisBtn.addEventListener('click', () => {
      removeHighlightFromAllButtons(); 
      buttons.yAxisBtn.classList.add('axis-highlight'); 
    });

    return buttonBox;
  };

  const loadFleet = () => {
    const fleetContainer = helper.create('dix', {
      className: 'fleet-container',
    });

    for (let i = 0; i < 5; i++) {
      let shipBox = helper.create('div', {
        className: 'ship-box',
        id: i,
      });
      let shipText = helper.create('div', { textContent: helper.shipNames[i], className: 'ship-text'} );
      let shipIcon = helper.create('img', { src: helper.shipIcons[i], className: 'ship-icon'} );
      shipBox.append(shipIcon, shipText);
      fleetContainer.appendChild(shipBox);
    }

    return fleetContainer;
  };

  const loadBottomButtons = () => {
    const buttonBox = helper.create('dic', { className: 'setup-bottom-btns' }); 

    buttonBox.append(buttons.resetBtn, buttons.confirmBtn); 

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
      textContent: 'Reset'
    }),
    confirmBtn: helper.create('button', {
      className: 'setup-btn',
      id: 'confirm-btn',
      textContent: 'Confirm'
    }),
  };

  return {
    loadSetupContent
  };
})();

export default CombatSetup;



