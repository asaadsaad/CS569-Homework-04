import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: [],
  inputs: ['win', 'loss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnChanges {
  win: number;
  loss: number;
  // @Input() scoreState:{w:number,l:number,computer:string}
  constructor() {}
  ngOnChanges(changes) {
    // console.log(changes.scoreState);
    console.log(
      `form Score ngOnchange : \n win: ${this.win}, loss:${this.loss}`
    );
  }

  ngOnInit(): void {}
}
