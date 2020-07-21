function startGame() {
    //starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    
    var messagesElement = document.getElementById('messages');
    //this allows the message to appear on the screen
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string) : void {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);