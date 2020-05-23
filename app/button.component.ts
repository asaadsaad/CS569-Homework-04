import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'


@Component({
    selector: 'buttoncomponent',
    template: `
    
        <button (click)="sendResponse()">{{buttonString}} </button>
    
    `
})

export class ButtonComponent implements OnChanges {
    @Input() buttonString: string
    @Output() onResponseOutput: EventEmitter<string>

    constructor() {
        this.onResponseOutput = new EventEmitter
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes is happening!!!')
        console.log(changes)
    }

    sendResponse() {
        // console.log(this.buttonString)
        this.onResponseOutput.emit(this.buttonString)
    }

}