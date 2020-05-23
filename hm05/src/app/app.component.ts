import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Score: Won:{{ won }}/Lost:{{ lost }}
    <br />
    <!-- <rock></rock> -->
    <button (click)="onChange('rock')">Rock</button>
    <button (click)="onChange('paper')">Paper</button>
    <button (click)="onChange('scissors')">Scissors</button>
  `,
})
export class AppComponent {
  public score: { w: number; l: number; computer: string };
  won = 0;
  lost = 0;
  public computerResult: string;
  public userResult: string;
  constructor() {
    // this.score.w = 0;
    // this.score.l = 0;
  }

  onChange(action: string): void {
    this.userResult = action;
    console.log(this.userResult, 'userResult');

    this.computerResult = this.computer();
    console.log(this.computerResult, 'computerResult');
    this.calculateWinner();
  }
  computer(): string {
    const randomNum = Math.floor(Math.random() * 3);
    const options: string[] = ['rock', 'paper', 'scissors'];
    console.log(options[randomNum], 'enummm');
    return state[randomNum];
  }
  calculateWinner(): void {
    if (this.userResult != this.computerResult) {
      if (this.userResult === 'rock' && this.computerResult === 'scissors') {
        this.won++;
        // let won = this.score.w++;
        // console.log(this.score.w);
      } else if (
        this.userResult === 'paper' &&
        this.computerResult === 'rock'
      ) {
        this.won++;
        // let won = this.score.w++;
      } else if (
        this.userResult === 'scissors' &&
        this.computerResult === 'paper'
      ) {
        this.won++;
        // let won = this.score.w++;
      } else {
        this.lost++;
        // let lost = this.score.l++;
      }
    }
  }
}

enum state {
  rock,
  paper,
  scissors,
}
// /Users/simon/Documents/CS569 Angular/Demos/changeDetection/CS569-Homework-05
