import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let newGame: Game;

//add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    //create a new Player instance 
    const player: Player = new Player();
    //and set its name to the value provided by the user
    //using the static getInputValue function by calling it directly on the utility class without creating an instance of the class
    player.name = Helpers.getValue('playername');

    //retrieving values from the input boxes
    //using the built-in Number constructor to convert the input strings to numbers
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    //create a Game instance and assign it to the newGame variable by passing the values to the constructor
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

//add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});