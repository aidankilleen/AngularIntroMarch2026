import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionInfo } from "./accordion-info/accordion-info";
import { AccordionItem } from './accordion-item';
import { JsonPipe } from '@angular/common';
import { Accordion } from "./accordion/accordion";


@Component({
  selector: 'app-root',
  imports: [AccordionInfo, JsonPipe, Accordion],
  template: `
    <div>
      <h1>Accordion Test</h1>

      <app-accordion
        [items]="items"/>
      <!--
      <app-accordion-info 
        [title]="accordionTitle"
        [items]="items"/>
      -->
      
      <!--
      {{ items | json }}
      -->

    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('accordion-investigation');

  accordionTitle = "Acc info";

  items:AccordionItem[] = [
    new AccordionItem(1, "Title 1", "This is Accordion Item 1"),
    new AccordionItem(2, "Title 2", "This is Accordion Item 2"),
    new AccordionItem(3, "Title 3", "This is Accordion Item 3"),
    new AccordionItem(4, "Title 4", "This is Accordion Item 4"),
    new AccordionItem(5, "Title 5", "This is Accordion Item 5"),
  ];


}
