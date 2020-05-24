import { Component} from '@angular/core';

export interface IState {
  state: { w: number, l: number, computer: string }
}
export enum ActionType {
  Rock,
  Paper,
  Scissors
}
@Component({
  selector: 'app-root',
  template: `
  
  <br/> <br/> <br/>

 
  <h1>Rock Paper Scissors</h1>
  
  <score [win]="state.w" [computer]="state.computer" [lose]="state.l"> </score>
  <rpsGame (userEmit)="userHanlder($event)" ></rpsGame>

  `,

})
export class AppComponent implements IState {
  public ActionType = ActionType;
  public state = { w: 0, l: 0, computer:null }
  public user: String

  

  userHanlder(userInput: String): void {
    this.user = userInput
    this.computerGame()
    this.rpsGame()
  }

  computerGame() {
    const computerInput = Math.floor(Math.random() * 3)
    this.state.computer = ActionType[computerInput]
  }
  rpsGame(): void {
    switch (this.user + this.state.computer) {
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        this.state.w++
        break;
      case 'RockPaper':
      case 'ScissorsRock':
      case 'PaperScissors':
        this.state.l++
        break;
      case 'RockRock':
      case 'ScissorsScissors':
      case 'PaperPaper':
        this.state.l + 0
        this.state.w + 0
        break;
    }
  }

}
