function startGame() {
    //starting a new game
    var messagesElement = document.getElementById('messages');
    //this allows the message to appear on the screen
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
