import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'rpsGame',
  template: `
  <p>
  <button (click)="userGame('Rock')" > Rock </button>

  <button (click)="userGame('Paper')" > Paper </button>

  <button (click)="userGame('Scissors')" >Scissors </button>
  </p>
  `,
  
  


})
export class ButtonAppComponent  {
@Output() userEmit: EventEmitter<String>

constructor() {
  this.userEmit = new EventEmitter();
}



  userGame(userInput: String): void {
    this.userEmit.emit(userInput);

  }
  

}
