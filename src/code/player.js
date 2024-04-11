const Player = ((gameboard) => {
    let playerName; 

    const setPlayerName = (name) => {
        playerName = name;
    };

    const getPlayerName = () => {
        let firstChar = playerName.charAt(0).toUpperCase();
        let restOfName = playerName.slice(1);

        return firstChar + restOfName; 
    };

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
        setPlayerName,
        getPlayerName,
        attack
    }; 
})();

module.exports = Player; 
