import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button (click)="onbtn()">{{ name }}</button> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() name: string;
  @Output() outputbtn: EventEmitter<string>;

  constructor() {
    this.outputbtn = new EventEmitter();
  }
  onbtn() {
    this.outputbtn.emit(this.name);
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('button ngonchange');
  }
}
