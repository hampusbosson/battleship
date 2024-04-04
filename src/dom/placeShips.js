import helper from './helper';
import Gameboard from '../code/gameboard';
import Ship from '../code/ship';
import CombatSetup from './combatSetup';

const PlaceShips = (() => {
  let currentMouseOverHandlers = new Map();
  let currentMouseOutHandlers = new Map();
  let playerBoard = Gameboard();
  let outOfBounds = false;

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

  const shipBoxSelector = () => {
    let shipLength = 0;
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
        shipLength = helper.ships[shipId].length;
        lightGridSquares(shipLength, CombatSetup.getActiveAxis());
      });
    });

    document.addEventListener('click', (event) => {
      // If the clicked element is not a ship-box, reset all ship boxes
      if (!event.target.closest('.ship-box')) {
        if (!outOfBounds) {
            resetSelectedShip();
            resetShipBoxes();
        }
      }
    });

    return shipLength;
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

  const lightGridSquares = (shipLength, axis) => {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridWidth = 10; // Assuming a grid width of 10 for this example
  
    gridSquares.forEach((element, index) => {
      // Remove existing event listeners if they exist
      if (currentMouseOverHandlers.has(element)) {
        element.removeEventListener('mouseover', currentMouseOverHandlers.get(element));
        element.removeEventListener('mouseout', currentMouseOutHandlers.get(element));
      }
  
      // Define new handlers
      const mouseOverHandler = () => {
        let endIndex = index + (axis === 'x' ? shipLength - 1 : (shipLength - 1) * gridWidth);
        let placementIsValid = true; // Assume valid until proven otherwise
  
        // First pass: Check if any part of the placement is invalid
        for (let i = index; i <= endIndex && placementIsValid; i += (axis === 'x' ? 1 : gridWidth)) {
          if (i >= gridSquares.length || (axis === 'x' && Math.floor(i / gridWidth) !== Math.floor(index / gridWidth))) {
            placementIsValid = false;
            break; // Stop checking if we already know the placement is invalid
          }
  
          let [x, y] = gridSquares[i].id.split('').map(Number); // Using Number as a shorthand
          if (playerBoard.isOccupied(x, y)) {
            placementIsValid = false;
            break; // Stop checking if we find any square is occupied
          }
        }
  
        // Second pass: Apply classes based on placement validity
        for (let i = index; i <= endIndex && i < gridSquares.length; i += (axis === 'x' ? 1 : gridWidth)) {
          if (axis === 'x' && Math.floor(i / gridWidth) !== Math.floor(index / gridWidth)) {
            break; // Additional safeguard for horizontal axis
          }
  
          const square = gridSquares[i];
          if (placementIsValid) {
            square.classList.add('grid-highlight');
          } else {
            square.classList.add('grid-square-invalid', 'grid-highlight-invalid');
          }
        }
      };
  
      const mouseOutHandler = () => {
        gridSquares.forEach(square => {
          square.classList.remove('grid-highlight', 'grid-highlight-invalid', 'grid-square-invalid');
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
        if (!isShipSelected() || outOfBounds) {
            return;
        }
        //remove highlight on gridsquares
        helper.resetGridSquares();
        //find selected ship
        let selectedShipId = null;
        for (let id in selectedShip) {
          if (selectedShip[id] === true) {
            selectedShipId = parseInt(id);
          }
        }
        //ship data 
        let rotationAxis = CombatSetup.getActiveAxis();
        let xAxis = parseInt(square.id.charAt(0), 10);
        let yAxis = parseInt(square.id.charAt(1), 10);
        let shipLength = helper.ships[selectedShipId].length;
        let shipName = helper.ships[selectedShipId].name;
        //rotate ship if needed
        let ship = Ship(shipLength, selectedShipId);
        if (rotationAxis === 'y') {
            ship.rotateShip();
        }
        
        playerBoard.placeShip(ship, xAxis, yAxis);
        console.log(playerBoard.getBoard()); 

        helper.placeShipIcon(square, shipName, rotationAxis, shipLength);

        const selectedShipBox = document.getElementById(`${selectedShipId}`);
        selectedShipBox.classList.add('ship-box-placed');
        selectedShipBox.lastChild.classList.add('ship-text-placed');

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
