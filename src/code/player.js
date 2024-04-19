const Player = ((gameboard) => {
    const attack = (enemyBoard, x, y) => {
        enemyBoard.receiveAttack(x,y); 
        computerAttack(gameboard);
    };

    const computerAttack = (playerBoard) => {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10); 
        if (playerBoard.squareAttacked(randomX, randomY)) {
            computerAttack(playerBoard); 
        } else {
            playerBoard.receiveAttack(randomX, randomY);
        }
    };

    return {
        attack
    }; 
});

export default Player;