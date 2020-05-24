import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
@Component({
  selector: 'score',
  template: ` Score : Won {{ display.w }}/ Lost {{ display.l }} `,

  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent {
  @Input() display: { w: number; l: number; computer: string };
  ngOnChanges(change) {
    console.log(change);
  }
}
