import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'paper-button',
  template: `
  <button (click)="playPaper()">Paper</button>
  `,
  styles: [`button {padding : 10px 20px; font-size : 20px} ` ]
})
export class PaperButtonComponent {
  @Output() playGame: EventEmitter<string>;

  constructor(){
    this.playGame = new EventEmitter();
  }
  
  playPaper (){
   this.playGame.emit('paper');
  
  }

}
