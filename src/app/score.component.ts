import {
  Component,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "app-score",
  template: ` <h2>Score : Won {{ score.w }} / Lost {{ score.l }}</h2> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnChanges {
  @Input() score: { w: number; l: number; computer: string };
  @Output() computerChoiceHistory = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchnage in score component");
    console.log(changes);
    if (changes.score.previousValue) {
      console.log("previous choice", changes.score.previousValue["computer"]);
    }
  }
}
