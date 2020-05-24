import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Rock Paper Scissor Game</h2>
      <score [display]="score"></score>
      <app-rock (userPlaying)="userPlaying($event)"></app-rock>
      <app-paper (userPlaying)="userPlaying($event)"></app-paper>
      <app-scissors (userPlaying)="userPlaying($event)"></app-scissors>
      <p>Computer choice was :{{ score.computer }}</p>
    </div>
  `,
})
export class AppComponent {
  public score: { w: number; l: number; computer: string } = {
    w: 0,
    l: 0,
    computer: '',
  };
  public player: string;
  userPlaying(e): void {
    console.log(e);
    this.player = e;
    this.computerRandomChoice();
    this.result();
  }
  computerRandomChoice(): void {
    const randomNumbers = Math.floor(Math.random() * 3);
    console.log(Choices[randomNumbers]);
    this.score.computer = Choices[randomNumbers];
  }
  result(): void {
    if (this.player !== this.score.computer) {
      if (this.player === 'rock' && this.score.computer === 'scissor') {
        this.score = Object.assign({}, this.score, { w: this.score.w++ });
      } else if (this.player === 'paper' && this.score.computer === 'rock') {
        this.score = Object.assign({}, this.score, { w: this.score.w++ });
      } else if (this.player === 'scissor' && this.score.computer === 'paper') {
        this.score = Object.assign({}, this.score, { w: this.score.w++ });
      } else {
        this.score = Object.assign({}, this.score, { l: this.score.l++ });
      }
    }
  }
}
enum Choices {
  rock,
  paper,
  scissors,
}
