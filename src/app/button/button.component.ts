import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() stateChanger=new EventEmitter<{choise:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onWin(resdata:HTMLInputElement){
    //console.log(resdata.innerHTML)
    this.stateChanger.emit({
      choise:resdata.innerHTML
    })
  }
}
