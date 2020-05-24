import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-rock',
  template: ` <button (click)="rockhandler()">Rock</button> `,
})
export class RockComponent {
  @Output() userPlaying: EventEmitter<string>;
  constructor() {
    this.userPlaying = new EventEmitter();
  }
  rockhandler() {
    this.userPlaying.emit('rock');
  }
}
