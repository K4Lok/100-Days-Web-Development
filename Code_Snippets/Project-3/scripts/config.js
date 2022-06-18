function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid;
    // const selectedPlayerId = event.target.dataset.playerId;
    // console.log(selectedPlayerId);
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display="block";
    backdropElement.style.display="block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display="none";
    backdropElement.style.display="none";
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}