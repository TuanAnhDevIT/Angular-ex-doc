import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: '<app-child (myEvent)="handleEvent($event)"></app-child>',
})
export class ParentComponent {
    handleEvent(data: string) {
        console.log('Received event data:', data);
    }
}
