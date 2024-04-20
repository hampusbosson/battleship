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
    const gridContainer = helper.create('div', { className: 'setup-grid-container', position: 'relative' });
    const gridSquare = helper.create('div', { className: 'setup-grid', id: 'setup-grid', position: 'absolute' });
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

    gridContainer.append(loadLetterSection(), loadNumberSection(), gridSquare ); 

    return gridContainer;
  };

  const loadNumberSection = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    const numbersContainer = create('div', { classList: 'numbers-container' } ); 

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

  const shipIcons = [
    '../assets/icons/carrier.svg',
    '../assets/icons/battleship.svg',
    '../assets/icons/cruiser.svg',
    '../assets/icons/submarine.svg',
    '../assets/icons/destroyer.svg'
  ];

  const shipNames = [
    'Carrier (5f)',
    'Battleship (4f)',
    'Cruiser (4f)',
    'Submarine (3f)',
    'Destroyer (2f)'
  ];

  const ships = {
    0: { length: 5, name: 'Carrier' },
    1: { length: 4, name: 'Battleship' },
    2: { length: 4, name: 'Cruiser' },
    3: { length: 3, name: 'Submarine' },
    4: { length: 2, name: 'Destroyer' }
};

const resetGridSquares = () => {
  const gridSquares = document.querySelectorAll('.grid-square');
  
  gridSquares.forEach((square) => {
    square.classList.remove('grid-highlight');
  });
};

const placeShipIcon = (startSquare, shipType, axis, shipLength) => {
  const shipContainer = create('div', {id: 'ship-container'});
  shipContainer.classList.add(`${shipType}-${axis}`);

  if (axis === 'y') {
    shipContainer.style.height = `${shipLength * 3}rem`;
    shipContainer.style.width = '3rem';
  } else {
    shipContainer.style.width = `${shipLength * 3}rem`;
    shipContainer.style.height = '3rem';
  }

  let iconURL = `../assets/icons/${shipType}-${axis}.svg`;
  let icon = create('img', {src: iconURL, className: 'ship'});
  shipContainer.appendChild(icon);

  shipContainer.style.position = 'absolute'; 
  shipContainer.style.zIndex = '-1';

  let square = document.getElementById(`${startSquare.id}`);
  square.prepend(shipContainer);
};

const resetGameboardGrid = () => {
  const gridSquares = document.querySelectorAll('.grid-square');

  gridSquares.forEach(square => {
    while(square.firstChild) {
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

  return {
    create,
    restorePage,
    loadGridSquare,
    loadLetterSection,
    loadNumberSection,
    placeShipIcon,
    resetGridSquares,
    resetGameboardGrid,
    activateConfirmBtn,
    resetConfirmBtn,
    shipIcons,
    shipNames,
    ships
  };
})();

export default helper;
