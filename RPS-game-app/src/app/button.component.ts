import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
   <div >
  <button  (click)="onClickButton1('rock')"> Rock </button>
  <button  (click)="onClickButton2('paper')"> Paper </button>
  <button  (click)="onClickButton3('scissors')"> Scissors </button>
</div>
  `,
  styles: [`
  button{display: block; margin: auto;
       font-weight: bold;
    color:darkblue; 
    width:140px; 
    font-size: 30px;
    margin-bottom: 20px;
  }`
  ],
  
})
export class ButtonComponent {
  @Input('game') game:{w:number, l:number, computer:string} 
  
  @Output() onChangeSelector = new EventEmitter();
  
  onClickButton1(n:string) {
    this.onChangeSelector.emit(n);
  }
  onClickButton2(n:string) {
    this.onChangeSelector.emit(n);
  }
  onClickButton3(n:string) {
    this.onChangeSelector.emit(n);
  }
  
  ngOnChanges() {
    this.change('button Change control');
  }
  private change(msg: string) {
    console.log(msg);
  }

 }
