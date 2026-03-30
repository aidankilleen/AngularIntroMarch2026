import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effect-investigation-page',
  imports: [FormsModule],
  template: `
    <div [class.dark]="theme() == 'dark'">
      <h2>Effect Investigation</h2>


      <input type="checkbox" 
          [ngModel]="theme() == 'dark'" 
          (ngModelChange)="theme.set(theme() == 'dark' ? 'light' : 'dark')"/>
    </div>
  `,
  styleUrl: './effect-investigation-page.css',
})
export class EffectInvestigationPage {

    theme = signal<'light' | 'dark'>('light');

    ngOnInit() {

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme != null)
        if (savedTheme == 'light' || savedTheme == 'dark') {
          this.theme.set(savedTheme);
        }
    }
    
    constructor() {

      effect(() => {
        // this function gets run once

        // and then is called again
        // any time a signal() or other depencency changes

        // use computed() for derived state - i.e. state variables that are calculated from other state variables
        // use effect() for other calculations / operations, not state related


        console.log(`The theme was changed: ${ this.theme() }`);

        // store this state variable in localStorage
        localStorage.setItem('theme', this.theme());
      });
    }

}
