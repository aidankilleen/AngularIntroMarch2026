import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-accordion-panel',
  imports: [JsonPipe],
  template: `
    <div >
      <h2 (click)="onClick()">{{ item()?.title }}</h2>
      @if (expanded) {
        <p>{{ item()?.text }}</p>
      }
    </div>
  `,
  styleUrl: './accordion-panel.css',
})
export class AccordionPanel {

  item=input<AccordionItem>();
  expanded=false;

  onClick() {
    this.expanded = !this.expanded;
  }
}
