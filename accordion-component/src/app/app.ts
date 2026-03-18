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

        <app-accordion [items]="jsonItems"/>


        {{ this.ns.getItems() | async | json }}

  `,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('accordion-component');
  /*
  //public ns:NewsService;

  constructor(public ns: NewsService) {
    this.newsItems = ns.newsItems;

    //this.ns = ns;
  }
  */
  ns:NewsService = inject(NewsService);
  
  newsItems:AccordionItem[]=[];
  jsonItems:AccordionItem[] = [];
  today: Date = new Date();

  ngOnInit(): void {
    console.log("ngOnInit() called");
    /*
    this.ns.getItems().subscribe({
      next: (data)=>{
        this.jsonItems = data;
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
