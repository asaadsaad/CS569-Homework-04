import { Component, OnInit, Output } from '@angular/core';
import gameState from './inerface';
import { gameChoice } from './gameChoice';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Rock paper scissor</h1>

    <app-score [allState]="state"></app-score>

    <!-- <div>[choices]="choices"</div> -->

    <app-button
      [GameState]="state"
      labelname="Rock"
      (changeStae)="handelChangestate($event)"
    ></app-button>
    <app-button
      [GameState]="state"
      labelname="Paper"
      (changeStae)="handelChangestate($event)"
    ></app-button>
    <app-button
      [GameState]="state"
      labelname="Scissor"
      (changeStae)="handelChangestate($event)"
    ></app-button>
    <!-- <app-button></app-button> -->
    <P>Computer choice was: {{ state.computer }}</P>
  `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public state: gameState;
  public choices: any;
  public label: string;
  constructor() {
    this.label,
      (this.state = {
        w: 0,
        l: 0,
        computer: '',
      });
    this.choices = gameChoice;
    this.label = this.choices[0];
    console.log(this.state);
    console.log(this.state.w);

    // this.label = this.choices[1];
    // this.label = this.choices[2];
    // console.log(this.choices);
  }

  // @Output() w;

  handelChangestate(e) {
    this.state = e;
    console.log(e);
  }

  ngOnInit() {
    // this.choices = gameChoice;
    // this.state.computer = this.choices.random();
    // this.state.computer = this.choices[Math.floor(Math.random())];
    // // Math.ceil
    // console.log('random ', this.choices[Math.floor(Math.random())]);
    // console.log('random ', this.state.computer);
    // for (let i in gameChoice) {
    //   console.log();
    //   this.choices = `<app-button >${i[0]}</app-button>`;
    //   return this.choices;
    // // }
    // this.choices = gameChoice;
    // this.choices.forEach((e) => {
    //   console.log(e);
    //   return e;
    // });
  }

  title = 'my-App';
}
