import helper from './helper';
import Ship from '../code/ship';


const CombatSetup = (() => {
  let currentMouseOverHandlers = new Map();
  let currentMouseOutHandlers = new Map();

  const loadSetupContent = () => {
    helper.restorePage();
    const content = document.getElementById('content');
    content.append(loadGameboard());

    shipBoxSelector();
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

  const selectedShip = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  };

  const shipBoxSelector = () => {
    const shipBox = document.querySelectorAll('.ship-box');
    shipBox.forEach((ship) => {
      ship.addEventListener('click', () => {
        event.stopPropagation();

        resetShipBoxes();

        ship.classList.add('ship-box-highlight');
        ship.lastChild.classList.add('ship-text-highlight');

        let shipId = ship.id;
        let shipLength = helper.ships[shipId].length;
        lightGridSquares(shipLength);
      });
    });

    document.addEventListener('click', (event) => {
      // If the clicked element is not a ship-box, reset all ship boxes
      if (!event.target.closest('.ship-box')) {
        resetShipBoxes();
      }
    });
  };

  const resetShipBoxes = () => {
    const shipBox = document.querySelectorAll('.ship-box');

    shipBox.forEach((otherShip) => {
      otherShip.classList.remove('ship-box-highlight');
      otherShip.lastChild.classList.remove('ship-text-highlight');
    });
  };

  const lightGridSquares = (shipLength) => {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridWidth = 10;

    gridSquares.forEach((element, index) => {
      // First, remove existing event listeners if they exist
      if (currentMouseOverHandlers.has(element)) {
        element.removeEventListener('mouseover', currentMouseOverHandlers.get(element));
        element.removeEventListener('mouseout', currentMouseOutHandlers.get(element));
      }

      // Define new handlers
      const mouseOverHandler = () => {
        let endIndex = index + shipLength - 1;
        let currentRow = Math.floor(index / gridWidth);
        let endRow = Math.floor(endIndex / gridWidth);

        if (currentRow === endRow) {
          for (let i = index; i <= endIndex && i < index + gridWidth; i++) {
            if (i < gridSquares.length) {
              gridSquares[i].classList.add('grid-highlight');
            }
          }
        }
      };

      const mouseOutHandler = () => {
        gridSquares.forEach(square => {
          square.classList.remove('grid-highlight');
        });
      };

      // Update the map with new handlers
      currentMouseOverHandlers.set(element, mouseOverHandler);
      currentMouseOutHandlers.set(element, mouseOutHandler);

      // Attach the new event listeners
      element.addEventListener('mouseover', mouseOverHandler);
      element.addEventListener('mouseout', mouseOutHandler);
    });
  };

  return {
    loadSetupContent
  };
})();

export default CombatSetup;



