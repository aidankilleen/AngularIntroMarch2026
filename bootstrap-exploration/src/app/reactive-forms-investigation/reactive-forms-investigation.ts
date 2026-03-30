import { Component, signal } from '@angular/core';
import { UserEditor } from "../user-editor/user-editor";
import { UserEditorForm } from "../user-editor-form/user-editor-form";
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-forms-investigation',
  imports: [UserEditor, UserEditorForm, JsonPipe],
  template: `
    <h2>Reactive Forms Investigation</h2>

    <app-user-editor-form 
      [user]="user()" 
      (saved)="onSaved($event)"/>

    <hr>
    {{ user() | json }}
  
  `,
  styleUrl: './reactive-forms-investigation.css',
})
export class ReactiveFormsInvestigation {

  user = signal<User>({
    id:1, name:"Alice", email:"alice@gmail.com", active:true
  });

  onSaved(updatedUser: User) {

    this.user.set(updatedUser);
  }

}
