import { Component } from '@angular/core';

enum choiceEnum {
  rock,
  paper,
  scissors
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Rock Paper Scissors</h1>

    <scorecomponent [winsInput] = "wins" [lossesInput]="losses" ></scorecomponent>

    <buttoncomponent buttonString = "Rock" 
    (onResponseOutput)="handleSelection($event)"
    ></buttoncomponent>
   
    <buttoncomponent buttonString = "Paper"
    (onResponseOutput)="handleSelection($event)"
    ></buttoncomponent>

    <buttoncomponent buttonString = "Scissors"
    (onResponseOutput)="handleSelection($event)"
    ></buttoncomponent>
    
    <h2>
    computer choice was: {{this.computer}}
</h2>
  
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  wins: number = 0
  losses: number = 0
  computer: string = ''

  constructor() { }

  handleSelection(choice: string) {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    let computerChoiceIndex: number = getRandomInt(3)
    this.computer = choiceEnum[computerChoiceIndex]

    console.log(this.computer);
    let choiceCode: number

    switch (choice) {
      case 'Rock': choiceCode = 0
        break
      case 'Paper': choiceCode = 1
        break
      case 'Scissors': choiceCode = 2
        break
    }

    switch (choiceCode) {
      case 0: switch (computerChoiceIndex) {
        case 0:
          break
        case 1: this.losses++
          break
        case 2: this.wins++
          break
      } break
      case 1: switch (computerChoiceIndex) {
        case 0: this.wins++
          break
        case 1:
          break
        case 2: this.losses++
          break
      } break
      case 2: switch (computerChoiceIndex) {
        case 0: this.losses++
          break
        case 1: this.wins++
          break
        case 2:
      }
    }

    console.log('===================')
  }

}


    // console.log('choice:', choice, 'choiceCode: ', choiceCode)
    // console.log('this.computer: ', this.computer, 'computerChoiceIndex:', computerChoiceIndex)
