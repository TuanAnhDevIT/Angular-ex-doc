// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule và ReactiveFormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Thêm FormsModule vào đây
    ReactiveFormsModule, // Thêm ReactiveFormsModule vào đây
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
