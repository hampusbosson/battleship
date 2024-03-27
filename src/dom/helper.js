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
    const gridContainer = helper.create('div', { className: 'setup-grid-container'});
    const gridSquare = helper.create('div', { className: 'setup-grid' });

    loadGrid().forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let square = helper.create('div', {
          className: 'grid-square',
          id: `square-${rowIndex}-${columnIndex}`,
        });
        gridSquare.appendChild(square);
      });
    });
    gridContainer.append(loadLetterSection(), loadNumberSection(), gridSquare); 

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

  return {
    create,
    restorePage,
    loadGridSquare,
    loadLetterSection,
    loadNumberSection
  };
})();

export default helper;
