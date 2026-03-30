import { Component, effect, inject, model, output } from '@angular/core';
import { User } from '../user';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-editor-form',
  imports: [JsonPipe, ReactiveFormsModule],
  template: `
    <div>
      <h3>User Form</h3>
      <form [formGroup]="form">
        <input type="number"
            formControlName="id" READONLY/><br>
        <input type="text"
            formControlName="name"/><br>
        <input type="text"
            formControlName="email"/><br>
        <input type="checkbox"
            formControlName="active"/><br>
          <button (click)="onSubmit()">Save</button>
      </form>
      <hr>
      {{ user() | json }}

    </div>
 
  `,
  styleUrl: './user-editor-form.css',
})
export class UserEditorForm {

  user = model<User>();
  saved = output<User>();

  fb = inject(FormBuilder);

  form = this.fb.group({
    id: [0],
    name: [''], 
    email: [''], 
    active: [false]
  });

  constructor() {

    effect(() => {
      const user = this.user();
      this.form.patchValue({
        id: user?.id,
        name: user?.name, 
        email: user?.email, 
        active: user?.active
      });
    });
  }
  
  onSubmit() {
    const value = this.form.getRawValue();

    console.log(value);

    const updatedUser = {
      id: value.id ?? 0, 
      name: value.name ?? '', 
      email: value.email ?? '', 
      active: value.active ?? false
    }
    this.user.set(updatedUser);
    this.saved.emit(updatedUser);
  }


}
