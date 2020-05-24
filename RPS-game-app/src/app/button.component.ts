import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
   <div >
  <button  (click)="onClickButton($event)"> Rock </button>
  <button  (click)="onClickButton($event)"> Paper </button>
  <button  (click)="onClickButton($event)"> Scissors </button>
</div>
  `,
  styles: [`
  button{
       font-weight: bold;
    color:darkblue; 
    width:140px; 
    font-size: 30px;
    margin-bottom: 20px;
  }`
  ],
  // outputs: ['w', 'l', 'computer']
})
export class ButtonComponent {
  @Output() w: EventEmitter<number>;
  @Output() l: EventEmitter<number>;
  @Output() computer: EventEmitter<string>;
  @Output() selectByUser: string='';
  @Output() selectByComp: string='';
  @Output() compChoices: string[];
 
  constructor(){
    this.w = new EventEmitter();
    this.l = new EventEmitter();
    this.computer = new EventEmitter();
  }

  onClickButton(event) {
    this.w.emit(event);
    this.l.emit(event);
    this.computer.emit(event);
  }
  ngOnChanges() {
    this.change('button Change control');
  }
  private change(msg: string) {
    console.log(msg);
  }

 }
