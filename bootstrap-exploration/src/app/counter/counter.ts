import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <div>
      <h2>Counter</h2>

      {{ currentValue() }}

      <button (click)="onIncrement()">+</button>
    </div>
  
  `,
  styleUrl: './counter.css',
})
export class Counter {

  value = input<number>();
  changed = output<number>();
  
  currentValue = signal<number>(0);
  
  ngOnInit() {
    this.currentValue.set(this.value() ?? 0);
  }
  onIncrement() {
  
    // we can't modify value
    // input() are read-only
    // this.value.
    this.currentValue.update(n => n + 1);
    this.changed.emit(this.currentValue());
  }
}
