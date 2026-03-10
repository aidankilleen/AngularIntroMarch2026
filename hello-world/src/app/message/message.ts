import { Component, input } from '@angular/core';
import { MessageInfo } from '../message-info';

@Component({
  selector: 'app-message',
  imports: [],
  template: `
  <div>
    @if (importance() === "high") {
      <h1>IMPORTANT!!!</h1>
    }
    <h2>{{message()?.title}}</h2>
    <p>{{message()?.text}}</p>
  </div>
  `,
  styleUrl: './message.css',
})
export class Message {
  message=input<MessageInfo>();
  //title=input();
  //text=input();
  importance=input();
}
