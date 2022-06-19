function startNewGame() {
    // for(player of players) {
    //     if(!player.name) {
    //         alert('Please enter the players name!');
    //         return;
    //     }
    // }
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
    if(event.target.tagName != 'LI') {
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
    switchPlayer();
}