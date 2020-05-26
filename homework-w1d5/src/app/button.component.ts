import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button>{{ label }}</button> `,
  styles: [],
  
})
export class ButtonComponent  {
  @Input() label: string;

  // constructor() {}

 
}