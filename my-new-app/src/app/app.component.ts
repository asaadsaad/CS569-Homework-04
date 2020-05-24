import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1>Rock Paper Scissors</h1>
  <score [intialScore]="intialObj"> </score>
  <app-button (onGamechange)=handleResult($event)></app-button>
  <p> Computer choice was : </p>
</div>
  `,
  styles: [

  ]
})
export class AppComponent {
  intialObj: { W: number; L: number; computer: string } = { W: 0, L: 0, computer: "rock" }


  handleResult(e) {
    if (e === "rock") {
      console.log(e);
      return
    }
    else if (e === "paper") {
      console.log(e);
      this.intialObj = Object.assign ({}, this.intialObj, {W: this.intialObj.W++ })
    }
    else if (e === "scissors") {
      console.log(e);
      //let loss= { ...this.intialObj, L: this.intialObj.L++ }
      this.intialObj = Object.assign ({}, this.intialObj, {W: this.intialObj.L++ })
    }
  }






}
// enum game {
//   Rock,
//   Paper,
//   Scissors
// }