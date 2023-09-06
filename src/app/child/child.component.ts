import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    template: '<button (click)="emitEvent()">Click Me</button>',
})
export class ChildComponent {
    @Output() myEvent = new EventEmitter<string>();

    emitEvent() {
        this.myEvent.emit('Event data from child');
    }
}
