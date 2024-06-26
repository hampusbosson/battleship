import commanderIconPath from '../assets/icons/commander.png';
import carrierXIcon from '../assets/icons/carrier-x.svg';
import carrierYIcon from '../assets/icons/carrier-y.svg';
import battleshipXIcon from '../assets/icons/battleship-x.svg';
import battleshipYIcon from '../assets/icons/battleship-y.svg';
import cruiserXIcon from '../assets/icons/cruiser-x.svg';
import cruiserYIcon from '../assets/icons/cruiser-y.svg';
import submarineXIcon from '../assets/icons/submarine-x.svg';
import submarineYIcon from '../assets/icons/submarine-y.svg';
import destroyerXIcon from '../assets/icons/destroyer-x.svg';
import destroyerYIcon from '../assets/icons/destroyer-y.svg';
import carrierIcon from '../assets/icons/carrier-x.svg';
import battleshipIcon from '../assets/icons/battleship.svg';
import cruiserIcon from '../assets/icons/cruiser.svg';
import submarineIcon from '../assets/icons/submarine.svg';
import destroyerIcon from '../assets/icons/destroyer.svg';


const helper = (() => {
  const restorePage = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
  };

  const create = (type, data) => {
    if (!type) console.log('missing type');

    const element = document.createElement(type);

    for (const [key, value] of Object.entries(data)) {
      element[key] = value;
    }

    return element;
  };

  const loadGrid = () => {
    const grid = Array(10)
      .fill()
      .map(() => Array(10).fill());

    return grid;
  };

  const loadGridSquare = () => {
    const gridContainer = helper.create('div', {
      className: 'setup-grid-container',
      position: 'relative',
    });
    const gridSquare = helper.create('div', {
      className: 'setup-grid',
      id: 'setup-grid',
      position: 'absolute',
    });
    gridSquare.style.zIndex = '1';

    loadGrid().forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let square = helper.create('div', {
          className: 'grid-square',
          id: `${rowIndex}${columnIndex}`,
        });
        gridSquare.appendChild(square);
      });
    });

    gridContainer.append(loadLetterSection(), loadNumberSection(), gridSquare);

    return gridContainer;
  };

  const loadNumberSection = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersContainer = create('div', { classList: 'numbers-container' });

    numbers.forEach((num) => {
      const number = create('div', { classList: 'number', textContent: num });
      numbersContainer.appendChild(number);
    });

    return numbersContainer;
  };

  const loadLetterSection = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const lettersContainer = create('div', { classList: 'letters-container' });

    letters.forEach((ltr) => {
      const letter = create('div', { classList: 'letter', textContent: ltr });
      lettersContainer.appendChild(letter);
    });

    return lettersContainer;
  };

  const loadCommanderIcon = () => {
    const iconContainer = helper.create('div', {
      className: 'commander-icon-box',
    });
    const commanderIcon = helper.create('img', {
      src: commanderIconPath,
      className: 'commander-icon',
    });

    iconContainer.appendChild(commanderIcon);

    return iconContainer;
  };

  const shipIconsByAxis = {
    Carrier: {
      x: carrierXIcon,
      y: carrierYIcon,
    },
    Battleship: {
      x: battleshipXIcon,
      y: battleshipYIcon,
    },
    Cruiser: {
      x: cruiserXIcon,
      y: cruiserYIcon,
    },
    Submarine: {
      x: submarineXIcon,
      y: submarineYIcon,
    },
    Destroyer: {
      x: destroyerXIcon,
      y: destroyerYIcon,
    },
  };

  const shipIcons = {
    0: carrierIcon,
    1: battleshipIcon,
    2: cruiserIcon,
    3: submarineIcon,
    4: destroyerIcon
  };

  const shipNames = [
    'Carrier (5f)',
    'Battleship (4f)',
    'Cruiser (4f)',
    'Submarine (3f)',
    'Destroyer (2f)',
  ];

  const ships = {
    0: { length: 5, name: 'Carrier' },
    1: { length: 4, name: 'Battleship' },
    2: { length: 4, name: 'Cruiser' },
    3: { length: 3, name: 'Submarine' },
    4: { length: 2, name: 'Destroyer' },
  };

  const resetGridSquares = () => {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
      square.classList.remove('grid-highlight');
    });
  };

const placeShipIcon = (
  parentContainer,
  startSquare,
  shipType,
  axis,
  shipLength
) => {
  console.log(startSquare);
  const shipContainer = create('div', { id: 'ship-container' });
  shipContainer.classList.add(`${shipType}-${axis}`);

  if (axis === 'y') {
    shipContainer.style.height = `${shipLength * 3}rem`;
    shipContainer.style.width = '3rem';
  } else {
    shipContainer.style.width = `${shipLength * 3}rem`;
    shipContainer.style.height = '3rem';
  }

  const iconURL = shipIconsByAxis[shipType][axis];
  if (!iconURL) {
    console.error('Unknown ship type or axis');
    return;
  }

  const icon = create('img', { src: iconURL, className: 'ship' });
  shipContainer.appendChild(icon);

  shipContainer.style.position = 'absolute';
  shipContainer.style.zIndex = '-1';

  const squareSelector = `#${CSS.escape(startSquare.id)}`;
  const square = parentContainer.querySelector(squareSelector);
  if (square) {
    square.prepend(shipContainer);
  } else {
    console.error(`Square with selector ${squareSelector} not found.`);
  }
};

  const resetGameboardGrid = () => {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
      while (square.firstChild) {
        square.removeChild(square.firstChild);
      }
    });
  };

  const activateConfirmBtn = () => {
    const confirmBtn = document.querySelector('.confirm-btn');

    confirmBtn.classList.add('confirm-btn-active');
  };

  const resetConfirmBtn = () => {
    const confirmBtn = document.querySelector('.confirm-btn');

    confirmBtn.classList.remove('confirm-btn-active');
  };

  const typeWriter = (text, elementId, typingSpeed, callback) => {
    let i = 0;
    const element = document.getElementById(elementId);
    element.classList.add('typing-cursor');

    const typing = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typingSpeed);
      } else {
        element.classList.remove('typing-cursor');
        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    typing();
  };

  return {
    create,
    restorePage,
    loadGridSquare,
    loadLetterSection,
    loadNumberSection,
    loadCommanderIcon,
    placeShipIcon,
    resetGridSquares,
    resetGameboardGrid,
    activateConfirmBtn,
    resetConfirmBtn,
    typeWriter,
    shipIcons,
    shipNames,
    ships,
  };
})();

export default helper;
