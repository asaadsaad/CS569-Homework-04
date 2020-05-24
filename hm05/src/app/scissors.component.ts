import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-scissors',
  template: ` <button (click)="scissorsHandler()">Scissors</button> `,
})
export class ScissorsComponent {
  @Output() userPlaying: EventEmitter<string>;
  constructor() {
    this.userPlaying = new EventEmitter();
  }
  scissorsHandler() {
    this.userPlaying.emit('scissor');
  }
}
