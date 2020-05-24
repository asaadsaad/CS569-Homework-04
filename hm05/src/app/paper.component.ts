import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-paper',
  template: ` <button (click)="paperHandler()">Paper</button> `,
})
export class PaperComponent {
  @Output() userPlaying: EventEmitter<string>;
  constructor() {
    this.userPlaying = new EventEmitter();
  }
  paperHandler() {
    this.userPlaying.emit('paper');
  }
}
