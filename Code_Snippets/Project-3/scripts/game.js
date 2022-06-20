function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You won!, <span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    for(player of players) {
        if(!player.name) {
            alert('Please enter the players name!');
            return;
        }
    }

    resetGameStatus();

    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
    if(activePlayer === 0) 
        activePlayer = 1;
    else 
        activePlayer = 0;

    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if(event.target.tagName != 'LI' || gameIsOver === true) {
        return;
    }

    const selectedField = event.target;
    const selectedRow = +selectedField.dataset.row - 1;
    const selectedColumn = +selectedField.dataset.col - 1;

    if(gameData[selectedRow][selectedColumn] != 0)
        return;

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    const winnerId = checkForGameOver();

    if(winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    for(let i=0;i<3;i++) {
        if(
            gameData[i][0] > 0 && 
            gameData[i][0] === gameData[i][1]  && 
            gameData[i][1] === gameData[i][2]
        ) {
                return gameData[i][0];
        }
    }
    for(let i=0;i<3;i++) {
        if(
            gameData[0][i] > 0 && 
            gameData[0][i] === gameData[1][i]  && 
            gameData[0][i] === gameData[2][i]
        ) {
                return gameData[0][i];
        }
    }

    if(
        gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1]  && 
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    if(
        gameData[2][0] > 0 && 
        gameData[2][0] === gameData[1][1]  && 
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if(currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if(winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else {
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}