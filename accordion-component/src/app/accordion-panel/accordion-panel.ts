import { Component, input, output } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-accordion-panel',
  imports: [JsonPipe],
  template: `
    <div>
<!--       <h3 
        (click)="onClick()"
        [style]="{backgroundColor:open() ? 'lightcoral' : 'lightblue'}"
      > -->

      <h3
        (click)="onClick()"
        [class.open]="open()">
        {{ item()?.title }}
      </h3>
      @if(open()) {

        <p>{{ item()?.text}}</p>
      }
  </div>
  `,
  styleUrl: './accordion-panel.css',
})
export class AccordionPanel {

  item = input<AccordionItem>();

  panelToggle = output<number|null>();

  open = input<boolean>();

  public onClick() {
    
    this.panelToggle.emit(this.item()?.id ?? null);
  }
}
