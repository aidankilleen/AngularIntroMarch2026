import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-accordion-info',
  imports: [JsonPipe],
  template: `
    <div>
      <h2>{{title()}}</h2>
      <button (click)="onClick()">Click Here</button>
      <hr>
      @for (item of items(); track item.id) {

        {{ item.title}} <br>
      }

      <!-- {{ items() | json }}-->
    </div>
  `,
  styleUrl: './accordion-info.css',
})
export class AccordionInfo {

  // member variables
  title = input<string>();
  items = input<AccordionItem[]>();

  message:string = "Some message";

  // member functions
  onClick() {
    
    alert("you clicked");
    
  }
}
