import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primeng-exploration');

  items = [{
    label: 'Home', 
    icon: 'pi pi-home', 
    routerLink: '/'
  }, {
    label: 'Pipe Investigation', 
    icon: 'pi pi-wrench', 
    routerLink: '/pipe-investigation'
  }, 
   {
    label: 'Members', 
    icon: 'pi pi-users', 
    routerLink: '/members'
  }
]
}
