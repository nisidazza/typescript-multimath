function startGame() {
    //starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
}

function logPlayer(name: string = "MultiMath Player") : void {
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

//posting scores to the screen
function postScore(score: Number, playerName?:string) : void {
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    /*using non-null assertion operator to assert that the posted score element won't be null*/ 
    scoreElement!.innerText = `${score} - ${playerName}`; 
}

document.getElementById('startGame')!.addEventListener('click', startGame);