import { Component, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


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


export class ButtonComponent implements OnChanges {

  public ButtonChoices= Choices;
  public userChoice:EventEmitter<string>
  

  constructor() { 
    this.userChoice =new EventEmitter()
  }
  ngOnChanges(changes) {
  // throw new Error("Method not implemented.");
  console.log(`what is here ..`);
  
  }

  ngOnInit(): void {
  }
  onUserChoice(e){
    console.log(e.target.innerHTML);

    this.userChoice.emit(e.target.innerHTML )
    
  }

}
