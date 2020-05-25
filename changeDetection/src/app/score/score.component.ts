import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-score',
  template: ` <h3>Score: Won {{ state.w }} / Lost {{ state.l }}</h3> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() state: { w: number; l: number; computer: '' };
  constructor() {}

  ngOnInit(): void {
    console.log('inside ScoreComponent ngOnInit state :', this.state);
  }

  ngAfterViewChecked(): void {
    // this.state.w = 900;
    console.log('inside ScoreComponent ngAfterViewChecked state :', this.state);
  }

  ngOnChanges(change): void {
    console.log('inside ScoreComponent ngOnChanges Change detected...', change);
  }
}
