import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed-investigation-page',
  imports: [FormsModule],
  template: `
    <div [class.dark]="theme() == 'dark'">

      <input type="checkbox" 
          [ngModel]="theme() == 'dark'" 
          (ngModelChange)="theme.set(theme() == 'dark' ? 'light' : 'dark')"/>

      <h2>Computed Investigation</h2>

      {{ getFullName() }} 
      <hr>
      {{ firstName() + " " + lastName() }}
      <hr>
      {{ fullName() }}

      <hr>
      <input [ngModel]="firstName()" (ngModelChange)="onChangeFirstName($event)"/>
      <input [ngModel]="lastName()" (ngModelChange)="onChangeLastName($event)"/>
    </div>
  
  `,
  styleUrl: './computed-investigation-page.css',
})
export class ComputedInvestigationPage {

  theme = signal<'light' | 'dark'>('light');


  firstName = signal<string>("Alice");
  lastName = signal<string>("Adams");

  // computed values are "memoized" i.e only recalculated when the dependent signals change
  fullName = computed(()=>{
    for (let i = 0; i < 1e9; i++) {}
    console.log("computed() fullName called")
    return `${this.firstName()} ${this.lastName()}`
  })

  getFullName() {

    for (let i = 0; i < 1e9; i++) {}
    console.log("getFullname() called");
    return `${this.firstName()} ${this.lastName()}`;
  }

  onChangeFirstName(firstName: string) {
    this.firstName.set(firstName);
  }
  onChangeLastName(lastName: string) {
    this.lastName.set(lastName);
  }


}
