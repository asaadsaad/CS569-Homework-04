import { Component, OnInit, EventEmitter } from '@angular/core';


export enum Choices{
  Rock,
  Paper,
  Scissors
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
  ],
  outputs:['userChoice']

})


export class ButtonComponent implements OnInit {

  public ButtonChoices= Choices;
  public userChoice:EventEmitter<string>
  

  constructor() { 
    this.userChoice =new EventEmitter()
  }

  ngOnInit(): void {
  }

  onUserChoice(e){
    console.log(e.target.innerHTML);

    this.userChoice.emit(e.target.innerHTML )
    
  }

}
