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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements IState {
  public ActionType = ActionType;
  public state = { w: 0, l: 0, computer: null }
  public user: String



  userHanlder(userInput: String): void {

    this.user = userInput
    this.computerGame()
    this.rpsGame()


  }

  computerGame() {
    const computerInput = Math.floor(Math.random() * 3)
    this.state = { ...this.state, computer: ActionType[computerInput] }

  }


  rpsGame() {


    switch (this.user + this.state.computer) {

      case 'PaperRock':
      case 'RockScissors':
      case 'ScissorsPaper':

        this.state = { ...this.state, w: ++this.state.w }

        break;

      case 'RockPaper':
      case 'ScissorsRock':
      case 'PaperScissors':

        this.state = { ...this.state, l: ++this.state.l }
        
        break;

    }
  }

}
