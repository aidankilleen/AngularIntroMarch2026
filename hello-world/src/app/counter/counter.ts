import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <div>
      <h2>{{ title }}</h2>
      <h3>{{ count }}</h3>
      <button (click)="onIncrement()">+</button>
      <button (click)="onDecrement()">-</button>
    </div>
  `,
  styleUrl: './counter.css',
})
export class Counter {

  title = "Click to increment";
  count = 0;
  onIncrement() {
    this.count++;
  }
  onDecrement() {
    this.count--;
  }
}
