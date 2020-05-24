import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2> Rock Paper Scissors </h2>
  <button (click) = "rockClickHandler($event)"> Rock</button>
  <button (click) = "paperClickHandler($event)">Paper</button>
  <button (click) = "scissorClickHandler($event)"> Scissor</button>
  <h3> Score: Win  = {{game.win}}  / Lose {{game.lose}} </h3>
  `,
})
export class AppComponent {
  game = { win: 0, lose: 0, computer: "" }
  score: number = 0
  theComputer = () => {
    const randomNum = Math.floor(Math.random() * 3)
    const options: string[] = ['Rock', 'Paper', 'Scissor'];
    return this.game.computer = options[randomNum]
  }

  rockClickHandler = (e) => {
    const compPick = this.theComputer()
    const playerPick = e.target.innerHTML
    if (playerPick == compPick) {
       alert("its a draw!")
       console.log("its a draw!")
     
    }
    else if (playerPick !== compPick && compPick == "Scissor") {
      this.game.win++
    }
    else {
      this.game.lose++
    }
  }

  paperClickHandler = (e) => {
    const compPick = this.theComputer()
    const playerPick = e.target.innerHTML
    if (playerPick == compPick) {
      alert("its a draw!")
    }
    else if (playerPick !== compPick && compPick == "Scissor") {
      this.game.lose++
    }
    else {
      this.game.win++
    }
  }

  scissorClickHandler = (e) => {
    const compPick = this.theComputer()
    const playerPick = e.target.innerHTML
    if (playerPick == compPick) {
      alert("its a draw!")
      console.log("draw")
    }
    else if (playerPick !== compPick && compPick == "Paper") {
      this.game.win++
    }
    else {
      this.game.lose++
    }
  }


  ngOnChanges(score) { }
}
