import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() state:{w:number,l:number,computer:string}

  constructor() { }

  ngOnInit(): void {
  }

}
