import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `

    <div>
      <a routerLink="/">Home</a> | 
      <a routerLink="/about">About</a> |
      <a routerLink="/contact">Contact</a> |
      <a routerLink="/members">Members</a> |
    </div>
    <router-outlet />  
  
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa-investigation');
}
