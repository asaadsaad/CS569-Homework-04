import { Component, Input } from '@angular/core';

@Component({
  selector: 'score',
  template: `

<p> player Score:{{playerPoint}}</p>
<p> Computer Score:{{computerPoint}}</p>

  `,
   styles: [
    'p{ font-size: 25px; color:#037d50}'
  ]
})
export class ScoreSTComponent {

  @Input() playerPoint: number;
  @Input() computerPoint: number;

  playerScoreHandler() {
    this.playerPoint++;
  }

  computerScoreHandler() {
    this.computerPoint++;
  }
  
}
