import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <div class="center">
      <p>Score: WON- {{win}} / LOST- {{loss}}</p>
    </div>
  `,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        color: green;
        font-size: 42px;
      }
    `,
  ],
})
export class ScoreComponent implements OnInit {
  constructor() {}
  @Input() win: number;
  @Input() loss: number;

  ngOnInit(): void {}
}
