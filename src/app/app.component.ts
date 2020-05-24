import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p><span><b> Rock-Paper-Scissors Game </b></span> </p>
                <app-score [score]='state'></app-score> 
                <app-button (setChoose)='scoreChangHandler($event)' ></app-button>  
                <p>Computer choose was : {{state.computer}}</p>`
})

export class AppComponent   {

  public state: {w: number, l: number, computer: string}
 
    constructor(){
      this.state = {w:0, l:0,computer:'Game not Played'}
      console.log(gameChooses[0] , ' from app Component ')
    }

scoreChangHandler(userChoose : string){    
      
    let computerChoose = this.computerChoose();
    
       // lost case 
   if(userChoose == 'Rock' && computerChoose == 'Paper' ){
    this.state = {...this.state, l: this.state.l+=1, computer :computerChoose };
   }
   if(userChoose == 'Paper' && computerChoose == 'Scissors'){
    this.state = {...this.state, l: this.state.l+=1, computer :computerChoose };
   }
   if(userChoose == 'Scissors' && computerChoose == 'Rock' ){
    this.state = {...this.state, l: this.state.l+=1, computer :computerChoose };
   }
     // else winner 
   else this.state = {...this.state, w: this.state.w+=1, computer : computerChoose};
}
    
computerChoose (): string{
 let index = Math.floor(Math.random() * 3);
 let choose = gameChooses[index];
    console.log(gameChooses[index])
   return choose;  
}

}

// array of chooses 
enum  gameChooses {
  'Rock',
  'Paper',
  'Scissors',

}