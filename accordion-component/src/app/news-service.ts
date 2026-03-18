import { Injectable } from '@angular/core';
import { AccordionItem } from './accordion-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {
  }


  getItems(): Observable<AccordionItem[]>{

    return this.http.get<AccordionItem[]>(this.url);
  }


  title= "News Service";

  newsItems:AccordionItem[] = [
    new AccordionItem(1, "News Panel 1", "this is panel 1"), 
    new AccordionItem(2, "News 2", "this is panel 2"), 
    new AccordionItem(3, "News 3", "this is panel 3"), 
    new AccordionItem(4, "News 4", "this is panel 4"),
  ];
  

  items:AccordionItem[] = [
    new AccordionItem(1, "Panel 1", "this is panel 1"), 
    new AccordionItem(2, "Panel 2", "this is panel 2"), 
    new AccordionItem(3, "Panel 3", "this is panel 3"), 
    new AccordionItem(4, "Panel 4", "this is panel 4"),
  ];
}
