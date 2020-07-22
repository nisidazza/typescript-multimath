/// <reference path="player.ts" />
function startGame() {
    //starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New game starting for player: ${name}`);
}


//posting scores to the screen
function postScore(score: Number, playerName: string = 'MultiMath Player'): void {

    //thi variable can be assigned to any function that takes a single string parameter and returns void  
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    /*using non-null assertion operator to assert that the posted score element won't be null*/
    scoreElement!.innerText = `${score} - ${playerName}`;

    /*using the logger variable to call whichever function got assigned to it.
    passing a template string that will output the score*/
    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);

logMessage('Welcome to MultiMath!');

function logError(err: string): void {
    console.log(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());


