import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: [
  ],
  inputs:['win','loss']
})
export class ScoreComponent implements OnInit {
win:number;
loss:number;
  constructor() { }

  ngOnInit(): void {
  }

}
