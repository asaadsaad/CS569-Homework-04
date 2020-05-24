import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="rock()">Rock </button>
    <button (click)="paper()">Paper </button>
    <button (click)="scissors()">Scissors </button>

  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  @Output() onGamechange: EventEmitter<string>

  constructor() {

    this.onGamechange = new EventEmitter()

  }

  ngOnInit(): void {
  }

  rock() {
    this.onGamechange.emit(chocie[0])
  }
  paper() {
    this.onGamechange.emit(chocie[1])
  }
  scissors() {
    this.onGamechange.emit(chocie[2])
  }
}

enum chocie {
  rock,
  paper,
  scissors
}