import { Result } from './result';

//display the scores on the screen
export class Scoreboard {

    //array of objs that implements the Result interface
    private results: Result[] = []

    //adds new results
    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    //generates all the HTML representing all the results and shows them on the screen
    updateScoreboard(): void {
        //holds the HTML
        let output: string = '<h2>Scoreboard</h2>';

        //loops over the results array to add info from each result to the HTML
        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>'
        }

        //get a reference to the element on the page named score and add the HTML to it
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}