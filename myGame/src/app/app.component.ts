import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>  Rock Paper scissors (Game application)</h1>
  <h3> Game Zone </h3>
  <h3> Score: Won 5 :) /Lost 2 ('_')</h3>
    
  Rock: <button (click)="winnerHandler($event)">Rock</button>
  {{won}}
  Paper: <button (click)="paperhandler($event)">Paper</button>
  Scissors:<button (click)="losserHandler($event)">Scissors</button>
  {{lost}}
  <p>Computer choise was:paper</p>
`,
  styles: [
    `h1 {color: brown}
    h3 {color: purple}
    p {color:orange}`
  ]
})
export class AppComponent {
  //title = 'myGame';
  //counterValue: number;
   won: number;
   lost: number;
   computer: string;
  constructor() {
    this.won = 0;
    this.lost = 0;
    this.computer = '';
  }
  winnerHandler(e) {
    this.won = this.won + 5;
    return false;
  }
  paperhandler(e) {
    this.computer = "commputer choies!";
    return false;
  }
  losserHandler(e) {
    this.lost = this.lost + 2;
    return false;
  }
}
