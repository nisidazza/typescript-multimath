/// <reference path="result.ts" />

//display the scores on the screen
class Scoreboard {

    //array of objs that implements the Result interface
    private results: Result[] = []

    //adds new results
    addResult(newResult: Result): void {
        this.results.push(newResult);
    }
}