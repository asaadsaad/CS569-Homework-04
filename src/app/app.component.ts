import { Component, OnInit } from "@angular/core";

enum GameChoice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

@Component({
  selector: "app-root",
  template: `
    <h1>Rock Paper Scissors</h1>
    <app-button
      *ngFor="let choice of GameChoice"
      [gameButton]="choice"
      (onChoice)="onUserChoice($event)"
    ></app-button>
    <app-score
      [score]="appState"
      (computerChoiceHistory)="compChoiceHistory($event)"
    ></app-score>
    <h1>Computer choice was:{{ prevComputerChoice }}</h1>
  `,
})
export class AppComponent {
  public appState: { w: number; l: number; computer: string };
  public GameChoice = Object.values(GameChoice);
  public prevComputerChoice = "";
  constructor() {
    this.appState = { w: 0, l: 0, computer: "" };
  }

  onUserChoice(userchoice: string): void {
    //generate computer choice
    let index = Math.round(Math.random() * 2);
    let computerChoice = this.GameChoice[index];

    switch (true) {
      case userchoice == "Rock" && computerChoice == "Scissors":
      case userchoice == "Scissors" && computerChoice == "Paper":
      case userchoice == "Paper" && computerChoice == "Rock":
        this.appState = {
          ...this.appState,
          w: ++this.appState.w,
          computer: computerChoice,
        };
        this.prevComputerChoice = computerChoice;
        break;
      case userchoice == computerChoice: // no change or draws
        this.prevComputerChoice = computerChoice; // assign the computer choice to be displayed
        break;
      default:
        this.appState = {
          ...this.appState,
          l: ++this.appState.l,
          computer: computerChoice,
        };
        this.prevComputerChoice = computerChoice;
    }
  }
  compChoiceHistory(prevChoice: string): void {
    // store the previous computer choice emitted from child comp
    this.prevComputerChoice = prevChoice;
  }
}
