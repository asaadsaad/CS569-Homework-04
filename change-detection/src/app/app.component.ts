import { Component, Input } from '@angular/core';
import { Choice } from './enumChoice';
import { State } from './stateInterface';

@Component({
  selector: 'app-root',
  template: `
    <div class="box">
      <p>Rock Paper Scissors</p>
      <app-score [win]="this.state.win" [loss]="this.state.loss"></app-score
      ><br />
      <p>
        <app-button
          [state]="state"
          [label]="labelR"
          (clickEvent)="ClickRock($event)"
        ></app-button>
        <app-button
          [state]="state"
          [label]="labelP"
          (clickEvent)="ClickPaper($event)"
        ></app-button>
        <app-button
          [state]="state"
          [label]="labelS"
          (clickEvent)="ClickScissors($event)"
        ></app-button>
      </p>

      <p>Computer choice was:</p>
      <p style="color:black">{{ this.state.computer }}</p>
    </div>
  `,
  styles: [
    `
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        font-size: 42px;
        font-family: Courier;
      }
      .box {
        border-radius: 52px;
        border: double;
        background-color: yellow;
        width: 600px;
        height: 550px;
        margin-left: 500px;
      }
    `,
  ],
})
export class AppComponent {
  constructor() {}

  labelR: string = 'Rock';
  labelP: string = 'Paper';
  labelS: string = 'Scissors';

  state: State = {
    win: 0,
    loss: 0,
    computer: '',
  };
  // win = this.state.win;
  // loss = this.state.loss;

  randomChoice(choice) {
    const computerChoice = choice[Math.floor(3 * Math.random())];
    console.log('RANDOM---->', computerChoice);
    console.log('RANDOM STATE----->', this.state);
    this.state = Object.assign({}, this.state, { computer: computerChoice });
  }

  ClickRock(e) {
    // ROCK
    console.log(e);
    this.randomChoice(Choice);
    switch (this.state.computer) {
      case 'Rock':
        return this.state;
      case 'Paper':
        return (this.state = Object.assign({}, this.state, {
          loss: this.state.loss + 1,
        }));
      case 'Scissors':
        return (this.state = Object.assign({}, this.state, {
          win: this.state.win + 1,
        }));
    }
    console.log('STATE ----->', this.state);
  }

  ClickPaper(e) {
    // PAPER
    console.log('STATE ----->', this.state);
    console.log(e);
    this.randomChoice(Choice);
    switch (this.state.computer) {
      case 'Rock':
        return (this.state = Object.assign({}, this.state, {
          win: this.state.win + 1,
        }));
      case 'Paper':
        return this.state;
      case 'Scissors':
        return (this.state = Object.assign({}, this.state, {
          loss: this.state.loss + 1,
        }));
    }
  }

  ClickScissors(e) {
    // SCISSORS
    console.log('STATE ----->', this.state);
    console.log(e);
    this.randomChoice(Choice);
    switch (this.state.computer) {
      case 'Rock':
        return (this.state = Object.assign({}, this.state, {
          loss: this.state.loss + 1,
        }));
      case 'Paper':
        return (this.state = Object.assign({}, this.state, {
          win: this.state.win + 1,
        }));
      case 'Scissors':
        return this.state;
    }
  }
}
