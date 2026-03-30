import { Component } from '@angular/core';
import { User } from '../user';
import { JsonPipe } from '@angular/common';
import { UserEditor } from '../user-editor/user-editor';

@Component({
  selector: 'app-model-investigation-page',
  imports: [JsonPipe, UserEditor],
  template:  `
    <h2>Model Investigation</h2>

    <app-user-editor [(user)]="user"/>


    <hr>
    {{ user | json }}
  
  `,
  styleUrl: './model-investigation-page.css',
})
export class ModelInvestigationPage {


  user: User = new User(1, "Alice", "alice@gmail.com", true);



}
