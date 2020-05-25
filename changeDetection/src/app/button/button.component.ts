import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button>{{ label }}</button> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(change): void {
    console.log('inside ButtonComponent ngOnChanges Change detected...', change);
  }
}
