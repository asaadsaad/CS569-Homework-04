import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Rock Paper Scissor Game</h2>
      <score [display]="score"></score>
      <rock-button (playGame)="play($event)"></rock-button>
      <paper-button (playGame)="play($event)"></paper-button>
      <scissor-button (playGame)="play($event)"></scissor-button>
      <p>Computer choice was :{{score.computer}}</p>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  public score: { w:number ; l: number; computer: string }={ w:0, l:0, computer:""};
  public player: string;

  

  play(e): void {
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
      if (this.player=== 'rock' && this.score.computer === 'scissor') {
        this.score=Object.assign({}, this.score,{ w :this.score.w++}); // immutate
      } else if (
        this.player=== 'paper' &&
        this.score.computer === 'rock'
      ) {
        this.score=Object.assign({}, this.score,{ w :this.score.w++});

      } else if (
        this.player=== 'scissor' &&
        this.score.computer === 'paper'
      ) {
        this.score=Object.assign({}, this.score,{ w :this.score.w++});
      } else {
        this.score={... this.score, l: this.score.l++};

      }
    }
  }
}

enum Choices {
  rock,
  paper,
  scissor,
}
