import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2> Rock Paper Scissors </h2>
  <button (click) = "rockClickHandler($event)"> Rock</button>
  <button (click) = "paperClickHandler($event)">Paper</button>
  <button (click) = "scissorClickHandler($event)"> Sciccor</button>
  <h3> Score: Win  = {{win}}  /Lose {{lose}} </h3>
  `,
})
export class AppComponent {
  win: number = 0
  lose: number = 0
  computer: string = "rock"
  rockClickHandler = (e) => {
    if (this.computer === "scissor") {
      this.win++
    }
    else {
      this.win--
    }
  }
  paperClickHandler = (e) => {
    if (this.computer === "scissor") {
      this.win--
    }
    else {
      this.win++
    }
  }
  scissorClickHandler = (e) => {
    console.log('scissor')
  }
}
