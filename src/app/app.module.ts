// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'; // Import your custom directive here

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective // Add your custom directive here
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
