import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-score',
  template: ` <h3>Score: Won {{ state.w }} / Lost {{ state.l }}</h3> `,
  styles: [],
 
})
export class ScoreComponent  {

  @Input() state: {w: number, l: number, computer: ''}
  constructor() {}

}
