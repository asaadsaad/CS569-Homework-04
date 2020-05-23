import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-score',
  template: '<P> Score : Wone {{Wvalue}}/ Lost {{Lvalue}} </P>',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  public Wvalue: any;
  public Lvalue: any;
  @Input() allState: any;

  constructor() {
    (this.Wvalue = this.allState), (this.Lvalue = 0);
  }

  ngOnInit(): void {
    console.log(this.allState);
  }
  OnChanges(): void {
    console.log(this.allState);
  }
}
