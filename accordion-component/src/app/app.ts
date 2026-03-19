import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionItem } from './accordion-item';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Accordion } from "./accordion/accordion";
import { NewsService } from './news-service';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, UpperCasePipe, DatePipe, Accordion, AsyncPipe],
  template: `
    <h1>Angular is working</h1>


        <app-accordion [items]="newsItems"/>
        <app-accordion [items]="ns.items"/>

        @if (items$ | async; as items) {
          <app-accordion [items]="items"/>
        }

        <!--{{ ns.getItems() | async | json }}-->
        {{ items$ | async | json }}
  `,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('accordion-component');

  ns:NewsService = inject(NewsService);
  
  items$ = this.ns.getItems();

  newsItems:AccordionItem[]=[];
  jsonItems:AccordionItem[] = [];
  today: Date = new Date();

  ngOnInit(): void {
    console.log("ngOnInit() called");
/*    
    this.ns.getItems().subscribe({
      next: (data)=>{
        this.jsonItems = data;
        console.log(data) 
      }, 
      error: () => {}
    });
*/    
    
  }

  
  public doSomething() {
    // dependency injection
    // we don't instantiate the business logic ourselves
    // we request the business logic from Angular
    //newsService = new NewsService();
  
  }

}
