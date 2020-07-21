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

//passing the id of an input box and get back the value in the box
function getInputValue(elementID: string): string | undefined {
    
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if(inputElement.value === "") {
        return undefined;
    } else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);