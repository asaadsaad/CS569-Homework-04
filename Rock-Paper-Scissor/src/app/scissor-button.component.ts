import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'scissor-button',
  template: `
      <button (click)="playScissor()">Scissors</button>
  `,
  styles: [`button {padding : 10px 20px; font-size : 20px} `]
})
export class ScissorButtonComponent{
  @Output() playGame: EventEmitter<string>;

  constructor(){
    this.playGame = new EventEmitter();
  }
  
  playScissor (){
   this.playGame.emit('scissor');
  
  }
}
