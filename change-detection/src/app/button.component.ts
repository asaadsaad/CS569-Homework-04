import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from './stateInterface';

@Component({
  selector: 'app-button',
  template: `
    <div class="center">
      <button class="button" (click)="onClick()">{{ label }}</button>
    </div>
  `,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        color: blue;
        font-size: 42px;
      }
      .button {
        font-size: 32px;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  constructor() {
    this.clickEvent = new EventEmitter();
  }

  @Input() label: string;
  @Input() state: State;
  @Output() clickEvent: EventEmitter<string>;

  onClick() {
    // console.log(this.label);
    this.clickEvent.emit(this.label);
  }

  ngOnInit(): void {}
}
