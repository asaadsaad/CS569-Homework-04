import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score',
  template: ` <h2>score winner {{ winner }}: / losser {{ losser }} :</h2> `,
  styles: [],
})
export class ScoreComponent implements OnChanges {
  @Input() winner: number;
  @Input() losser: number;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('score ngonchange');
  }
}
