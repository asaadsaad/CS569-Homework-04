import { Component, ModuleWithComponentFactories } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <ng-content></ng-content>
  <h1> Rock Paper Scissors</h1>

  <button (click) = 'playerPick("rock") '>Rock</button>
  <button (click) = 'playerPick("paper")'>Paper</button>
  <button (click) = 'playerPick("scissors")'>Scissors</button>

<score 
[playerPoint]='playerScore'
[computerPoint]='computerScore'
(scoreChange) = "onChangeHandler($event)">
></score>

  <p>Player picked: {{playerSelected}}</p>
  <p>Computer choice was: {{computerSelected}}</p>
  `,
  styles: [
    'h1{ font-size: 25px; color:#6495ed}', 
    'p{ font-size: 25px; color:#037d50}'
  ]
})

export class AppComponent {
  public win: number;
  public lose: number;
  public computer: string;

  public playerSelected:string;
  public computerSelected:string;
  public status:string;
  public playerScore: number = 0;
  public computerScore: number = 0;
  public gameCombination = ['rock', 'paper', 'scissors']

  onChangeHandler(event) {
    console.log(event)
  }

  playerPick(playerWeapon: string): void {
    this.playerSelected = playerWeapon;
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3);
      this.computerSelected = this.gameCombination[randomNum];
      this.gameResult();
    }, 1000);
  }

  winner(player, computer) {
    this.playerScore++;
    this.playerSelected = player;
    this.computerSelected = computer;
    this.status = 'you win'
  }

  lossing(player, computer) {
    this.computerScore++;
    this.playerSelected = player;
    this.computerSelected = computer;
    this.status = 'you lose'
  }

  draw(player, computer) {
    this.playerSelected = player;
    this.computerSelected = computer;
    this.status = 'draw'
  }

  gameResult() {
    const playerSelection = this.playerSelected;
    const computerSelection = this.computerSelected;
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
      this.winner(playerSelection, computerSelection)
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
      this.lossing(playerSelection, computerSelection)

    } else {
      this.draw(playerSelection, computerSelection)
    }

  }

}