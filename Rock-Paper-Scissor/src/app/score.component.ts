import { Component, OnInit,Input,ChangeDetectionStrategy,OnChanges } from '@angular/core';

@Component({
  selector: 'score',
  template: `
    <p>
      Score : Won {{display.w}}/ Lost {{display.l}}
    </p>
  `,
  styles: [
  ],

   changeDetection : ChangeDetectionStrategy.OnPush // skip
})
export class ScoreComponent {
@Input()  display : { w:number ; l: number; computer: string };


ngOnChanges(change){
  
  console.log(change)
  if(change.display.previousValue.w !== change.display.currentValue.w){
   this.display.w =  change.display.currentValue.w +1  ;
  }
  if(change.display.previousValue.l !== change.display.currentValue.l){
   this.display.l=  change.display.currentValue.l + 1;
  }

}
}
