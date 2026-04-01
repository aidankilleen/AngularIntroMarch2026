import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SummaryPipe } from '../summary-pipe';

@Component({
  selector: 'app-pipe-investigation-page',
  imports: [CurrencyPipe, 
            DatePipe, 
            UpperCasePipe, 
            LowerCasePipe, 
            TitleCasePipe, 
            SummaryPipe],
  template: `
  <h2>{{ title | titlecase }}</h2>


  {{ text | uppercase }}
  <hr>
  {{ price | currency:'EUR' }}
  <hr>
  {{ today | date:'shortDate'}}

  <hr>

  <input type="range" [value]="length()" (input)="onChange($event)"/>
  <p>{{ text | summary:length() }}</p>
  
  `,
  styleUrl: './pipe-investigation-page.css',
})
export class PipeInvestigationPage {

  length = signal<number>(50);

  title = "pipe investigation page";
  price = 9.1234567;

  today = new Date();

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus eius unde? In perferendis atque reprehenderit illum totam, porro officiis animi sed doloremque laudantium ex ipsam veniam corrupti adipisci. Natus!"

  onChange(event: Event) {

    this.length.set(Number((event.target as HTMLInputElement).value));
  }
}
