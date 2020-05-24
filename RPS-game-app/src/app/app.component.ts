import { Component } from '@angular/core';

enum pickLists {
  'rock',
  'paper',
  'scissors'
}

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <app-score [win]='w' [loss]='l'></app-score>
    <app-button (click)= 'userChoice($event)'></app-button>
    <p>Computer choice was:  {{selectByComp}}</p>
  `,
  styles: [`
  h1{margin-top: 200px; 
    font-size: 40px; 
    color: black;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  background-color:lightblue;}
  
  p{font-size: 40px; 
    color: black;
    text-align: center;
    font-weight: bold; 
    background-color:white;}
  app-button{text-align: center;}
  `]
})
export class AppComponent {
  public title: string;
  constructor() {
    this.title = "Rock Paper Scissers";
  }
  public w: number = 0;
  public l: number = 0;
  computer: string;
  selectByUser: string = '';
  selectByComp: string = '';
  compChoices = [
    pickLists[0], pickLists[1], pickLists[2]
  ];

  userChoice(compChoices: string) {
    this.selectByUser = compChoices;
    console.log(this.selectByUser);
    setTimeout(() => {
      const index = Math.floor(Math.random() * 3);
      this.selectByComp = this.compChoices[index];
      console.log(this.selectByComp);
      this.outPutStatus();
    }, 3000);
  }

  clearField() {
    setTimeout(() => {
      this.selectByUser = '';
      this.selectByComp = '';
    }, 3000);
  }

  winner(user: string, computer: string) {
    this.w++;
    this.selectByUser = user;
    this.selectByComp = computer;
    this.clearField();
  }


  losser(user: string, computer: string) {
    this.l++;
    this.selectByUser = user;
    this.selectByComp = computer;
    this.clearField();
  }

  draw(user: string, computer: string) {
    this.selectByUser = user;
    this.selectByComp = computer;
    this.clearField();
  }


  outPutStatus() {
    const userChoice = this.selectByUser;
    const compChoice = this.selectByComp;
    // if (userChoice === pickLists[0] && compChoice == pickLists[2]) {
    //   this.winner(userChoice, compChoice);
    // } else if (userChoice === pickLists[1] && compChoice === pickLists[0]) {
    //   this.winner(userChoice, compChoice);
    // } else if (userChoice === pickLists[2] && compChoice === pickLists[1]) {
    //   this.winner(userChoice, compChoice);
    // } else if (userChoice == pickLists[0] && compChoice === pickLists[1]) {
    //   this.losser(userChoice, compChoice);
    // } else if (userChoice === pickLists[2] && compChoice === pickLists[0]) {
    //   this.losser(userChoice, compChoice);
    // } else if (userChoice === pickLists[1] && compChoice === pickLists[2]) {
    //   this.losser(userChoice, compChoice);
    // } else {
    //   this.draw(userChoice, compChoice);
    // }
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.winner(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.losser(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }

  }
}




