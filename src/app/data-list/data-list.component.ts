// src/app/data-list/data-list.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  template: `
    <h2>Data List</h2>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
})
export class DataListComponent {
  data: string[];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
