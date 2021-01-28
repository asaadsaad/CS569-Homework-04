import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <p>Score: Won {{game.w}} / Lost  {{game.l}} <p>
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
@Input('game') game:{w:number, l:number, computer:string} 
ngOnChanges(change) {
  if(change.game){
   
  }
  
}
private change(msg: string) {
  console.log(msg);
}
}
