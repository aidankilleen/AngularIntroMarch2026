import { Component, model } from '@angular/core';
import { User } from '../user';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  imports: [JsonPipe, FormsModule],
  template: `
  <div>
    <h2>User Editor</h2>

    <input [ngModel]="user()?.name" (ngModelChange)="updateName($event)"/><br>
    <input [ngModel]="user()?.email" (ngModelChange)="updateEmail($event)"/><br>
    <input type="checkbox" [ngModel]="user()?.active" (ngModelChange)="updateActive($event)"/><br>

    {{ user() | json }}
  </div>

  `,
  styleUrl: './user-editor.css',
})
export class UserEditor {

  user = model<User>()

  updateName(name: string) {
    this.user.set({
        ...this.user(), 
        name: name
      }
    );
  }
  updateEmail(email: string) {
    this.user.set({
        ...this.user(), 
        email
      }
    );
  }
  updateActive(active: boolean) {
    this.user.set({
        ...this.user(), 
        active
      }
    );
  }

/*
    this.user.update(current => {

      return {
        id: current?.id, 
        name: name, 
        email: current?.email, 
        active: current?.active
      }
    })
      */
  
}
