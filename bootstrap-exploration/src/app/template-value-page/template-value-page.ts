import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-template-value-page',
  imports: [Counter],
  template: `
    <h1>{{ title }}</h1>

    Name: {{ name() }} <br>

    {{ counter() }} <button (click)="onClick()">+</button>

    <hr>
    {{ n }} <button (click)="onIncrement()">+</button>
    <hr>
    <app-counter [value]="n" (changed)="onChanged($event)"/>


  `,
  styleUrl: './template-value-page.css',
})
export class TemplateValuePage {

  title:string = "Template Values Exploration";
  n = 1;

  name = signal<string>("Alice");
  counter = signal<number>(1);

  onClick() {
    // this.counter.set(this.counter() + 1);
    this.counter.update(currentValue => currentValue + 1);
  }

  onIncrement() {
    this.n++;
  }
  onChanged(value: number) {
    //alert(`counter was changed: ${value}`);
    this.n = value;
  }
}
