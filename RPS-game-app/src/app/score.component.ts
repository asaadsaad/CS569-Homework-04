import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <p>Score: Won {{win}} / Lost {{loss}}<p>
  `,
  styles: [`
  p{font-size: 40px; 
    color: darkblue;
    text-align: center;
    font-weight: bold; 
    background-color:lightblue;
    margin-bottom: 20px;}`
  ]
})
export class ScoreComponent {
@Input() win: number;
@Input() loss: number;

ngOnChanges() {
  this.change('Score change control');
}
private change(msg: string) {
  console.log(msg);
}
}
