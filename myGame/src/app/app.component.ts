import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>  Rock Paper scissors (Game application)</h1>
  <h3> Game Zone </h3>
  <h3> Score: Won 5 :) /Lost 2 ('_')</h3>
    
  Rock: <button (click)="increment($event)">Rock</button>
  {{counterValue}}
  Paper: <button (click)="decrement($event)">Paper</button>
  Scissors:<button (click)="decrement($event)">Scissors</button>
`,
  styles: [
    `h1 {color: brown}
    h3 {color: purple}`
  ]
})
export class AppComponent {
  //title = 'myGame';
  counterValue: number;
  constructor() {
    this.counterValue = 0;
  }
  increment(e) {
    this.counterValue = this.counterValue + 1;
    return false;
  }
  decrement(e) {
    this.counterValue = this.counterValue - 1;
    return false;
  }
}
