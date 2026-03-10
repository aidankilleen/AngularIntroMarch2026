import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';
import { AccordionPanel } from "../accordion-panel/accordion-panel";

@Component({
  selector: 'app-accordion',
  imports: [JsonPipe, AccordionPanel],
  template: `
  <div>
    @for (item of items(); track item.id) {
      <app-accordion-panel
        [item]="item"/>
    }
  </div>
  `,
  styleUrl: './accordion.css',
})
export class Accordion {

  items=input<AccordionItem[]>()


}
