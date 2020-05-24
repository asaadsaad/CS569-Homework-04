import { Component } from '@angular/core';
import { Choices } from './button/button.component';

//Decorate the appComponent,
//it run when this class is declar (Compile Time...)
@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <h1>Rock Paper Scissors</h1>
    <app-score [win]="state.w" [loss]="state.l"></app-score>
    <app-button (userChoice)="choice($event)"></app-button>
    <div></div>

    <h4>Computer choice was: {{ state.computer }}</h4>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public ButtonChoices = Choices;
  public state: {
    w: number;
    l: number;
    computer: string;
  } = {
    w: 0,
    l: 0,
    computer: '',
  };

  choice(e: string) {
    const userChoie = e;
    const randomChocie = Math.floor(Math.random() * 3);

    this.state = { ...this.state, computer: this.ButtonChoices[randomChocie] };

    this.whosWinner(e);
  }

  whosWinner(e) {
    console.log(`${e}  ------- ${this.state.computer}`);

    if (e === this.state.computer) {
      console.log('Draw....');
    } else {
      // console.log('try Again...');

      switch (e) {
        case this.ButtonChoices[0]: //Rock
          if (this.state.computer === this.ButtonChoices[1]) {
            this.state = { ...this.state, l: this.state.l + 1 };
          } else {
            this.state = { ...this.state, w: this.state.w + 1 };
          }
          break;

        case this.ButtonChoices[1]: //Paper
          if (this.state.computer === this.ButtonChoices[0]) {
            this.state = { ...this.state, w: this.state.w + 1 };
          } else {
            this.state = { ...this.state, l: this.state.l + 1 };
          }
          break;

        case this.ButtonChoices[2]: //Sic
          if (this.state.computer === this.ButtonChoices[0]) {
            this.state = { ...this.state, l: this.state.l + 1 };
          } else {
            this.state = { ...this.state, w: this.state.w + 1 };
          }
          break;

        default:
          break;
      }
    }

    console.log('obj', this.state);
  }
}
