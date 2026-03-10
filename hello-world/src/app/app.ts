import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from "./message/message";
import { Counter } from "./counter/counter";
import { MessageInfo } from './message-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Message, Counter],
  template: `
    <h1>Angular Hello world</h1>
    
    @for( message of messages; track message) {
      <app-message 
      [message]="message"/>
    }
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-world');

  messages = [
    new MessageInfo("Message 1","Msg1"),
    new MessageInfo("Message 2","Msg2"),

  ];


}
