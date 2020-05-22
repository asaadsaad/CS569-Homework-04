import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   state ={w:0, l:0, computer:"Paper"};
   choise:string;

   onWin(resData: {choise:string}){
     (console.log(resData.choise))
     if(resData.choise === this.state.computer){
       this.state.w++
     }else {this.state.l++}
     this.choise=this.state.computer;
   }
}
