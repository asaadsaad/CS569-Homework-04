import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'rock-button',
  template: `
  <button (click)="playrock()" >Rock</button>
  `,
  styles: [`button {padding : 10px 20px; font-size : 20px} `]
})
export class RockButtonComponent {
@Output() playGame: EventEmitter<string>;

constructor(){
  this.playGame = new EventEmitter();
}

playrock (){
 this.playGame.emit('rock');

}

}
