import { Component, Input, OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <p>
      Score : Won: {{score.w}}/ Lost :{{score.l}}</p>
  `,
  styles: [
  ]
})

export class ScoreComponent implements OnChanges{
  @Input() public score:{w: number, l: number, computer: string};
  constructor(){
      console.log('Rendering from Score Component');
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    
  }
  
}
