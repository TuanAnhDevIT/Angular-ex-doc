// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

  getData(): string[] {
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
  }
}
