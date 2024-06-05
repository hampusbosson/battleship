const Player = (gameboard) => {
  let computerHits = [];

  const attack = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
    if (!enemyBoard.squareAttacked(x, y)) {
      computerAttack(gameboard);
    }
  };

  const computerAttack = (playerBoard) => {
    let invalidCoordinate = true;
    let x;
    let y;

    while (invalidCoordinate) {
      if (computerHits.length > 1) {
        [x, y] = getRandomAndRemove(computerHits);
      } else {
        x = getRandomCoordinate();
        y = getRandomCoordinate();
      }
      if (playerBoard.isEmptyField(x, y)) {
        invalidCoordinate = false;
        playerBoard.receiveAttack(x, y);
        if (playerBoard.getBoard()[x][y] === 'hit') {
          // Check if it's a hit
          computerAttack(playerBoard); // Recursively attack again if it was a hit
        }
      }
    }

    addComputerAttack(playerBoard, x, y);
  };

  const addComputerAttack = (playerBoard, x, y) => {
    if (computerHits.length === 1) {
      computerHits = [];
    }

    if (playerBoard.getBoard()[x][y] === 'x') {
      return;
    }
    let origin = false;
    if (computerHits.length === 0) {
      computerHits.push([x, y]);
      origin = true;
    }
    if (x > 0 && x <= 9) {
      computerHits.push([x - 1, y]); // top
    }
    if (x >= 0 && x < 9) {
      computerHits.push([x + 1, y]); // top
    }
    if (y > 0 && y <= 9) {
      computerHits.push([x, y - 1]); // top
    }
    if (y >= 0 && y < 9) {
      computerHits.push([x, y + 1]); // top
    }

    if (computerHits.length > 1 && !origin) {
      if (x === computerHits[0][0]) {
        computerHits = [
          ...computerHits.slice(0, 1),
          ...computerHits.slice(1).filter((subArr) => subArr[0] === x),
        ];
      } else if (y === computerHits[0][1]) {
        computerHits = [
          ...computerHits.slice(0, 1),
          ...computerHits.slice(1).filter((subArr) => subArr[1] === y),
        ];
      }
    }
  };

  const getRandomCoordinate = () => {
    return Math.floor(Math.random() * 10);
  };

  function getRandomAndRemove(array) {
    const randomIndex = Math.floor(Math.random() * (array.length - 1)) + 1;
    const randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    return randomElement;
  }

  return {
    attack,
    computerAttack,
  };
};

export default Player;
