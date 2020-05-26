import { Component } from '@angular/core';

enum pickLists {
  'rock',
  'paper',
  'scissors'
}

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <app-score [game]='game' ></app-score>
    <app-button [game]='game'  (onChangeSelector)='userChoice($event)' ></app-button>
    <p>Computer choice was:{{computer}}</p>
  `,
  styles: [`
  h1{margin-top: 200px; 
    font-size: 40px; 
    color: white;
    text-align: center;
    font-weight: bold;
  background-color:red;}
  p{font-size: 40px; 
    color: white;
    text-align: center;
    font-weight: bold; 
    background-color:green;}
  
  `]
})
export class AppComponent {
  public title: string;
  constructor() {
    this.title = "Rock Paper Scissers";
  }
  public game={ w: 0, l: 0, computer:''}
  
  selectByUser: string;
  computer: string;
  compChoices = [
    pickLists[0], pickLists[1], pickLists[2]
  ];

  userChoice(userPick:string) {
    this.selectByUser = userPick;
    console.log(this.selectByUser);
    setTimeout(() => {
      const index = Math.floor(Math.random() * 3);
      this.computer = this.compChoices[index];
      console.log(this.computer);
      this.outPutStatus();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.selectByUser = '';
      this.computer = '';
    }, 1000);
  }

  winner() {
    this.game.w++;
    this.clearField();
  }

  losser() {
    this.game.l++;
    this.clearField();
  }

  draw() {
    this.clearField();
  }

  outPutStatus() {
    const userChoice = this.selectByUser;
    const compChoice = this.computer;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.winner();
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.losser();
        break;
      default:
        this.draw();
        break;
    }

  }
}




