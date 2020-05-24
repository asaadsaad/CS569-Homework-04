import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'score',
  template: `
    <p>
    Score: Won {{intialScore.W}}/ Lost {{intialScore.L}}
    </p>
  `,
  styles: [
  ]
  ,
  inputs: ['intialScore']

})
export class ScoreComponent {

  intialScore: { W: number; L: number; computer: string }

  // ngOnChanges(change): void {
  //   if (change.intialScore) {
  //     this.intialScore.W = change.intialScore.W
  //   }

  // }

}
