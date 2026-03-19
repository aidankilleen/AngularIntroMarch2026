import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsService } from './items-service';
import { AccordionItem } from './accordion-item';
import { catchError, map, of, startWith } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

export interface AccordionVm {
  loading: boolean;
  items: AccordionItem[];
  error: string | null;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  template: `
    <div>
      @if( vm$ | async; as vm) {
        @if (vm.loading) {
          <div>Loading...</div>
        } @else if (vm.error) {
          <div>{{ vm.error }}</div>
        } @else if (vm.items.length === 0) {
          <div>No items</div>
        } @else {
          {{ vm.items | json }}
        }
      }
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prep-async-calls');

  itemsService = inject(ItemsService);

  vm$ = this.itemsService.getItems()
            .pipe(
              map((items):AccordionVm => ({loading:false, items, error:null})), 
                  startWith({loading:true, items:[], error:null}), 
                  catchError(()=>of({loading:false, items:[], error:"Something went wrong"})));

  constructor() {

  }
}
