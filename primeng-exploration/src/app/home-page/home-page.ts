import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight-directive';

@Component({
  selector: 'app-home-page',
  imports: [HighlightDirective],
  template: `
    <h2>Home Page</h2>

    <div>Directives add functionality to existing tags</div>
  
    <div ptHighlight="red">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptas eos omnis consequuntur repellendus quas. Error aut omnis, quia quaerat iusto explicabo animi rerum magni dignissimos! Vitae dolorem fuga debitis.</div>
    <div ptHighlight="orange">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptas eos omnis consequuntur repellendus quas. Error aut omnis, quia quaerat iusto explicabo animi rerum magni dignissimos! Vitae dolorem fuga debitis.</div>

  `,
  styleUrl: './home-page.css',
})
export class HomePage {}
