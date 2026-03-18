import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { AccordionPanel } from "../accordion-panel/accordion-panel";

@Component({
  selector: 'app-accordion',
  imports: [UpperCasePipe, JsonPipe, AccordionPanel],
  template: `
    <div>
      <h2>{{ title() | uppercase }}</h2>

      @for (item of items(); track item.id) {
        <app-accordion-panel 
          [item]="item"
          [open]="item.id == openPanelId"
          (panelToggle)="onPanelToggle($event)"/>
      }
    </div>
    
  `,
  styleUrl: './accordion.css',
})
export class Accordion {
 
  title = input<string>();
  items = input<AccordionItem[]>();
  openPanelId:number|null = 4;
  
  onPanelToggle(id:number|null) {
    
    this.openPanelId = this.openPanelId == id ? -1 : id;
  }
}
