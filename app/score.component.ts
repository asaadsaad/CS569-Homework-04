import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'scorecomponent',
  template: `
    <h2>Score: Won {{winsInput}} / Lost {{lossesInput}}</h2>
        
    
    `
})

export class ScoreComponent implements OnChanges {
  @Input() winsInput: number
  @Input() lossesInput: number

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes is happening!!!')
    console.log(changes)
  }
}




// export class ScoreComponent implements OnChanges {
  // ngOnChanges(changes: SimpleChanges): void
    // ngOnChanges() {