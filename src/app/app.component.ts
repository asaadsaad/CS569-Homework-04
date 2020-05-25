import { Component } from '@angular/core';
/**
 * The root component will have the following state: {w: number, l: number, computer: string} to track number 
 * of wins/losses, and hold the computer choice.
 *  Score will be displayed using the reusable
 *  score component. Implement all actions in
 *  AppComponent having in mind that the 
 * state should be immutable. Display the previous computer choice after every state change.
Game choices should be declared as enum. 
Display all three game choices using three reusable button components.
 Pass the button label and function that needs to be triggered on click event.
Implement OnChanges interface for both button and score components.
 Make the necessary optimizations so the hook will only trigger if one of input values change.
  (Only score should re-render)
 */
enum Game {
  Rock = 'Rock',
  Paper = 'Paper',
  scissors = 'scissors',
}
@Component({
  selector: 'app-root',
  template: `
    <h1>Rock Paper Scissors</h1>
    <app-score [winner]="state.w" [losser]="state.l"> </app-score>
    <app-button [name]="Game.Rock" (outputbtn)="computerrandomoutput($event)">
    </app-button>
    <app-button [name]="Game.Paper" (outputbtn)="computerrandomoutput($event)">
    </app-button>
    <app-button
      [name]="Game.scissors"
      (outputbtn)="computerrandomoutput($event)"
    >
    </app-button>

    <h3>Computer Choice :{{ this.state.computer }}</h3>
  `,
})
export class AppComponent {
  Game = Game;
  state: { w: number; l: number; computer: string };
  constructor() {
    this.state = { w: 0, l: 0, computer: null };
  }

  game: string[] = [Game.Paper, Game.Rock, Game.scissors];

  computerrandomoutput(name) {
    let compChoice = this.game[Math.floor(Math.random() * this.game.length)];
    if (name === Game.Rock && compChoice === Game.scissors) {
      // this.state.w++;
      // const copy = Object.assign({}, this.state);
      // console.log(copy);
      // this.state.computer = compChoice;

      this.state = { ...this.state, w: ++this.state.w, computer: compChoice };
    } else if (name === Game.scissors && compChoice === Game.Paper) {
      this.state = { ...this.state, w: ++this.state.w, computer: compChoice };
    } else if (name === Game.Paper && compChoice === Game.Rock) {
      this.state = { ...this.state, w: ++this.state.w, computer: compChoice };
    } else if (name !== compChoice) {
      this.state = { ...this.state, l: ++this.state.l, computer: compChoice };
    }
    console.log(this.game);
    console.log(name);
    console.log('ran', this.game[Math.floor(Math.random() * 2)]);
  }
}
