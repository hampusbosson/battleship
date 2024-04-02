import helper from './helper';
import Gameboard from '../code/gameboard';
import Ship from '../code/ship';

const PlaceShips = (() => {
  let currentMouseOverHandlers = new Map();
  let currentMouseOutHandlers = new Map();
  let playerBoard = Gameboard();

  const selectedShip = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const resetSelectedShip = () => {
    for (const key in selectedShip) {
      selectedShip[key] = false;
    }
  };

  const isShipSelected = () => {
    for (const key in selectedShip) {
      if (selectedShip[key] === true) {
        return true; // Return immediately when a selected ship is found
      }
    }
    return false; // Return false if no selected ship is found
  };

  const getAxis = () => {
    
  };

  const shipBoxSelector = () => {
    const shipBox = document.querySelectorAll('.ship-box');
    shipBox.forEach((ship) => {
      ship.addEventListener('click', () => {
        event.stopPropagation();

        resetShipBoxes();
        resetSelectedShip();

        selectedShip[ship.id] = true;
        console.log(selectedShip);

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
        resetSelectedShip();
      }
    });
  };

  const resetShipBoxes = () => {
    const shipBox = document.querySelectorAll('.ship-box');

    shipBox.forEach((otherShip) => {
      otherShip.classList.remove('ship-box-highlight');
      otherShip.lastChild.classList.remove('ship-text-highlight');
    });

    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((element) => {
      element.removeEventListener(
        'mouseover',
        currentMouseOverHandlers.get(element),
      );
      element.removeEventListener(
        'mouseout',
        currentMouseOutHandlers.get(element),
      );
    });
  };

  const lightGridSquares = (shipLength) => {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridWidth = 10;

    gridSquares.forEach((element, index) => {
      // First, remove existing event listeners if they exist
      if (currentMouseOverHandlers.has(element)) {
        element.removeEventListener(
          'mouseover',
          currentMouseOverHandlers.get(element),
        );
        element.removeEventListener(
          'mouseout',
          currentMouseOutHandlers.get(element),
        );
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
        gridSquares.forEach((square) => {
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

  const placeShip = () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
      square.addEventListener('click', () => {
        if (!isShipSelected()) {
            return;
        }

        let selectedShipId = null;
        for (let id in selectedShip) {
          if (selectedShip[id] === true) {
            selectedShipId = parseInt(id);
          }
        }

        let xAxis = parseInt(square.id.charAt(0), 10);
        let yAxis = parseInt(square.id.charAt(1), 10);
        let shipLength = helper.ships[selectedShipId].length;

        let ship = Ship(shipLength, selectedShipId);
        playerBoard.placeShip(ship, xAxis, yAxis);
        console.log(playerBoard.getBoard());

        const selectedShipBox = document.getElementById(`${selectedShipId}`);
        selectedShipBox.classList.add('ship-box-placed');

        resetSelectedShip();
      });
    });
  };

  return {
    shipBoxSelector,
    placeShip
  };

})();

export default PlaceShips;
