import helper from './helper';
import Gameboard from '../code/gameboard';
import Ship from '../code/ship';
import CombatSetup from './combatSetup';

const PlaceShips = (() => {
  let currentMouseOverHandlers = new Map();
  let currentMouseOutHandlers = new Map();
  let playerBoard = Gameboard();
  let shipsPlaced = 0;
  var clonedGrid;

  const getPlayerBoard = () => {
    return playerBoard;
  };

  const shipPlacement = (() => {
    let placementIsValid = true; 

    return {
        setPlacementValid: (isValid) => {
            placementIsValid = isValid;
        },
        isPlacementValid: () => placementIsValid,
    };
  })();

  const selectedShip = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const allShipsPlaced = () => {
    return shipsPlaced === 5;
  };

  const resetShipsPlaced = () => {
    shipsPlaced = 0; 
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

  const getSelectedShipID = () => {
    let id = '0'; 
    for (const key in selectedShip) {
        if (selectedShip[key] === true) {
            id = key;
        } 
    }
    return id.toString(); 
  };

  const selectShip = (shipId) => {
    resetShipBoxes();
    resetSelectedShip();
    if (playerBoard.shipPlaced(parseInt(shipId) + 1)) {
        return;
    }
    selectedShip[shipId] = true; // Assuming selectedShip is accessible at this scope
  
    // Update UI to reflect the selected ship
    const shipBox = document.getElementById(shipId);
    shipBox.classList.add('ship-box-highlight');
    shipBox.lastChild.classList.add('ship-text-highlight');
  
    // Update grid highlights based on the newly selected ship
    updateGridHighlights();
  };
  
  const updateGridHighlights = () => {
    if (!isShipSelected()) {
        return;
    }
    let shipId = getSelectedShipID(); // Ensure this returns the ID as a string, which is key in helper.ships
    let shipLength = helper.ships[shipId].length;
    lightGridSquares(shipLength, CombatSetup.getActiveAxis());
  };

  const shipBoxSelector = () => {
    const shipBoxes = document.querySelectorAll('.ship-box');
    shipBoxes.forEach((ship) => {
      ship.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        console.log(ship.id);
        selectShip(ship.id); // Pass the ID of the clicked ship to selectShip
      });
    });

    //set placementValid to true everytime mouse is not over grid
    document.addEventListener('mouseover', () => {
        const isgridClicked = event.target.closest('.setup-grid');
        if (!isgridClicked) {
            shipPlacement.setPlacementValid(true);
        }
      });

    document.addEventListener('click', (event) => {
        // Check if the clicked element or any of its parents match the '.ship-box' selector
        const isShipBoxClick = event.target.closest('.ship-box');
        // Check if the clicked element's ID is 'xAxisBtn' or 'yAxisBtn'
        const isAxisButtonClick = event.target.id === 'xAxis-btn' || event.target.id === 'yAxis-btn';

        // If the click is not on a ship box and not on the axis buttons, and the placement is valid
        if (!isShipBoxClick && !isAxisButtonClick && shipPlacement.isPlacementValid()) {
          resetSelectedShip();
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

  const removeShipBoxContent = (shipId) => {
    const selectedShipBox = document.getElementById(`${shipId}`);
    selectedShipBox.firstChild.classList.add('ship-icon-placed');
    selectedShipBox.lastChild.classList.add('ship-text-placed');
    selectedShipBox.classList.add('ship-box-placed');
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
        let placementIsValid = true; 
        shipPlacement.setPlacementValid(placementIsValid); // Assume valid until proven otherwise
  
        // First pass: Check if any part of the placement is invalid
        for (let i = index; i <= endIndex && placementIsValid; i += (axis === 'x' ? 1 : gridWidth)) {
          if (i >= gridSquares.length || (axis === 'x' && Math.floor(i / gridWidth) !== Math.floor(index / gridWidth))) {
            placementIsValid = false;
            shipPlacement.setPlacementValid(placementIsValid);
            break; // Stop checking if we already know the placement is invalid
          }
  
          let [x, y] = gridSquares[i].id.split('').map(Number); // Using Number as a shorthand
          if (playerBoard.isOccupied(x, y)) {
            placementIsValid = false;
            shipPlacement.setPlacementValid(placementIsValid);
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
    const board = document.getElementById('setup-grid');
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
      square.addEventListener('click', () => {
        if (!isShipSelected() || !shipPlacement.isPlacementValid()) {
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
        shipsPlaced += 1;
        console.log(shipsPlaced);
        console.log(playerBoard.getBoard()); 

        helper.placeShipIcon(board, square, shipName, rotationAxis, shipLength);

        removeShipBoxContent(selectedShipId);
        resetSelectedShip();

        if (allShipsPlaced()) {
          helper.activateConfirmBtn();
          var grid = document.querySelector('.setup-grid-container');
          clonedGrid = grid.cloneNode(true);
        }
      });
    });
  };

    const getClonedGrid = () => {
    return clonedGrid;
  };

  return {
    shipBoxSelector,
    placeShip,
    updateGridHighlights,
    getPlayerBoard,
    allShipsPlaced,
    resetShipsPlaced,
    getClonedGrid
  };

})();

export default PlaceShips;
