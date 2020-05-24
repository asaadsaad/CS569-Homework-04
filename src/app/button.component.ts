import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button (click)="userchoice(gameButton)">{{ gameButton }}</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() gameButton: string;
  @Output() onChoice = new EventEmitter<string>();

  userchoice(userGuess: string): void {
    this.onChoice.emit(userGuess);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchnage in button component");
  }
}
