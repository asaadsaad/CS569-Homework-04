import { Component,OnChanges,Output,EventEmitter, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button (click)="handleChoose('Rock')">Rock</button> 
      <button (click)="handleChoose('Paper')">Paper</button>
      <button (click)="handleChoose('Scissors')">Scissors</button>
    </div>
  `,
changeDetection :  ChangeDetectionStrategy.OnPush  

})
export class ButtonComponent implements OnChanges{

  @Output() setChoose : EventEmitter<string>

  constructor(){
      this.setChoose =  new EventEmitter();
      console.log('Rendering from button Component')
  }
  
  handleChoose( choose : string ){
    this.setChoose.emit(choose);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)

  }
  
}
