import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, JsonPipe, RouterLink],
  template: `
  <h2>Users Page</h2>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
    @if (users$ | async; as users ) {
      @for (user of users; track user.id) {
        <tr>
          <td><a [routerLink]="['/users', user.id]">{{user.id}}</a></td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.active ? "Active" : "Inactive"}}</td>
        </tr>
      }
    }
    </tbody>
  </table>
    
    `,
  styleUrl: './users-page.css',
})
export class UsersPage {

  usersService = inject(UsersService);
  users$ = this.usersService.getUsers();

}
