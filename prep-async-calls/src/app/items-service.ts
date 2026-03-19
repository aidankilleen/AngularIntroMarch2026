import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccordionItem } from './accordion-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
private url = 'http://localhost:3000/items?_delay=3000';

  constructor(private http: HttpClient) {
  }


  getItems(): Observable<AccordionItem[]>{

    return this.http.get<AccordionItem[]>(this.url);
  }


}
