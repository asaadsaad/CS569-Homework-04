import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { gameChoice } from '../gameChoice';

@Component({
  selector: 'app-button',
  // templateUrl: './button.component.html'
  template: `<button (click)="handelClick($event)">{{ labelname }}</button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  public name: string;
  public choices: any;
  // public labelname: string;

  constructor() {
    // this.name = 'paper';
    this.choices = gameChoice;
    this.changeStae = new EventEmitter();
  }
  @Input() labelname: string;
  @Input() GameState: {
    w: number;
    l: number;
    computer: string;
  };
  @Output() changeStae: EventEmitter<any>;

  
  handelClick(e): void {
    // this.state.computer = this.choices[Math.floor(Math.random())];
    // // Math.ceil
    console.log('random ', this.choices[Math.ceil(Math.random())]);

    let userresult = this.labelname;
    let computerrresult = this.choices[Math.ceil(Math.random())];

    // this.GameState.l = 1;
    if (userresult !== computerrresult) {
      if (userresult === 'Rock' && computerrresult === 'Scissor') {
        // user win
        console.log('line39 userwin');
        // this.changeStae.emit(this.GameState.w + 1);
        this.changeStae.emit({
          ...this.GameState,
          w: this.GameState.w + 1,
          computer: computerrresult,
        });
      }

      if (userresult === 'Scissor' && computerrresult === 'Paper') {
        // user win
        console.log('line49 userwin');
        // this.changeStae.emit(this.GameState.w + 1);
        this.changeStae.emit({
          ...this.GameState,
          w: this.GameState.w + 1,
          computer: computerrresult,
        });
      }
      if (userresult === 'Paper' && computerrresult === 'Rock') {
        // user win
        console.log('line58 userwin');
        // this.changeStae.emit(this.GameState.w + 1);
        this.changeStae.emit({
          ...this.GameState,
          w: this.GameState.w + 1,
          computer: computerrresult,
        });
      }
      // computer area
      if (computerrresult === 'Rock' && userresult === 'Scissor') {
        console.log('line67 comp win');
        //  comp win
        // this.changeStae.emit(this.GameState.l + 1);
        this.changeStae.emit({
          ...this.GameState,

          l: this.GameState.l + 1,
          computer: computerrresult,
        });
      }
      if (computerrresult === 'Scissor' && userresult === 'Paper') {
        console.log('line77 comp win');
        // comp win
        // this.changeStae.emit(this.GameState.l + 1);
        this.changeStae.emit({
          ...this.GameState,

          l: this.GameState.l + 1,
          computer: computerrresult,
        });
      }
      if (computerrresult === 'Paper' && userresult === 'Rock') {
        console.log('line87 comp win');

        // comp win
        // this.changeStae.emit(this.GameState.l + 1);
        this.changeStae.emit({
          ...this.GameState,
          l: this.GameState.l + 1,
          computer: computerrresult,
        });
      }
    } else {
      // this.changeStae.emit({
      //   ...this.GameState,
      //   l: this.GameState.l + 1,
      //   computer: computerrresult,
      // });
      // this.changeStae.emit('play againg  the same result ');
    }
    // console.log('random ', this.state.computer);
    // console.log(this.GameState);
    console.log(userresult, computerrresult);
  }
  ngOnInit(): void {}
}
