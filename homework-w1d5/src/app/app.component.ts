import { Component, OnInit, OnChanges } from '@angular/core';

enum choices {
  Rock,
  Paper ,
  Scissors
}
function computerPick() : number{
let random = (Math.floor(Math.random() * 10)) % 3;
return random;
}

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>

  <div>
      <app-score [state]='state'></app-score>
  </div>
  
  <div>
      <app-button [label]='choices[0]' (click)='check(choices.Rock)'></app-button>
      <app-button [label]='choices[1]' (click)='check(choices.Paper)'></app-button>
      <app-button [label]='choices[2]' (click)='check(choices.Scissors)'></app-button>
  </div>
  <h3>Computer choice was: <span>{{state.computer}}</span></h3>`,
  styles: []
})
export class AppComponent implements OnInit, OnChanges{
  title = 'Rock Paper Scissors';
  state: { w: number, l: number, computer: string };
  choices : any;

  constructor() {
    this.state = { w: 0, l: 0, computer: '' };
    this.choices = choices;
  }
  ngOnInit(): void {
    console.log('state: ', this.state)
  }

  ngOnChanges(change): void{
    console.log('inside AppComponent ngOnChanges Change detected...', change);
  }

  check(choice: number): void{
    this.state.computer = choices[computerPick()];
    switch (this.state.computer) {
      case choices[0]:
        if (choice === choices.Paper) {
          this.state = { ...this.state, w: this.state.w + 1 };
          
        }
        if (choice === choices.Scissors) {
           this.state = { ...this.state, l: this.state.l + 1 };
        }
        break;
      case choices[1]:
        if (choice === choices.Scissors) {
         this.state = { ...this.state, w: this.state.w + 1 };
        }
        if (choice === choices.Rock) {
          this.state = { ...this.state, l: this.state.l + 1 };
        }
        break;
      case choices[2]:
        if (choice === choices.Rock) {
          this.state = { ...this.state, w: this.state.w + 1 };
        }
        if (choice === choices.Paper) {
          this.state = { ...this.state, l: this.state.l + 1 };
        }
        break;
    
      default:
        break;
    }
    
  }
  

}
