import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    // ...
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Đảm bảo đã import ReactiveFormsModule ở đây
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
