import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenubarModule],
  template: `
        <div class="card">
            <p-menubar [model]="items" />
        </div>
        <router-outlet/>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bootstrap-exploration');

  items = [{
                label: 'Home',
                icon: 'pi pi-home', 
                routerLink: '/'
            },
            {
                label: 'About',
                icon: 'pi pi-star', 
                routerLink: 'about'
            },
            {
                label: 'Contact us',
                icon: 'pi pi-star', 
                routerLink: 'contact'
            },
            {
                label: 'Template Values',
                icon: 'pi pi-star', 
                routerLink: 'template-values'
            },            
            {
                label: 'Model Investigation',
                icon: 'pi pi-star', 
                routerLink: 'model-investigation'
            },            
                        {
                label: 'Computed Investigation',
                icon: 'pi pi-star', 
                routerLink: 'computed-investigation'
            }, 
            {
                label: 'Effect Investigation',
                icon: 'pi pi-star', 
                routerLink: 'effect-investigation'
            }, 
            {
                label: 'Reactive Forms Investigation',
                icon: 'pi pi-star', 
                routerLink: 'reactive-forms-investigation'
            }, 
          ];
}
