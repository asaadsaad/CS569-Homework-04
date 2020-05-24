import { Component, ChangeDetectionStrategy } from '@angular/core';

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
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements IState {
  public ActionType = ActionType;
  public state = { w: 0, l: 0, computer: null }
  public user: String



  userHanlder(userInput: String): void {
    this.user = userInput
    this.computerGame()
    this.rpsGame(this.state)

  }

  computerGame() {
    const computerInput = Math.floor(Math.random() * 3)

    this.state.computer = ActionType[computerInput]

  }


  rpsGame(prevState): any {

    if (this.user + this.state.computer == 'RockScissors' ||
      this.user + this.state.computer == 'PaperRock' ||
      this.user + this.state.computer == 'ScissorsPaper') {
      return  { ...prevState, w:this.state.w++}
    } else if (this.user + this.state.computer == 'RockPaper' ||
      this.user + this.state.computer == 'ScissorsRock' ||
      this.user + this.state.computer == 'PaperScissors') {
        return  { ...prevState,l:this.state.l++}
    } else {
      return  { ...prevState, w:this.state.w+0,l:this.state.l+0, }
    }

  }

}
