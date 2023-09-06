// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | uppercase }}</h1>
    <p>{{ text | uppercase }}</p>
  `
})
export class AppComponent {
  title = 'Angular Pipe Demo';
  text = 'This is an example of an uppercase pipe.';
}
