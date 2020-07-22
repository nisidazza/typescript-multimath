function startGame() {
    //starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: " + name);
}
//passing the id of an input box and get back the value in the box
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
//posting scores to the screen
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    //thi variable can be assigned to any function that takes a single string parameter and returns void  
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    /*using non-null assertion operator to assert that the posted score element won't be null*/
    scoreElement.innerText = score + " - " + playerName;
    /*using the logger variable to call whichever function got assigned to it.
    passing a template string that will output the score*/
    logger("Score: " + score);
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
logMessage('Welcome to MultiMath!');
function logError(err) {
    console.log(err);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
