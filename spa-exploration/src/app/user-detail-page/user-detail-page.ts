import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users-service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail-page',
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h2>User Detail {{ userId }}</h2>

    @if (user$ | async; as user) {
    
      <table>

        <tr>
          <td>Id</td><td>{{user.id}}</td>
      </tr>
      <tr>
          <td>Name</td><td>{{user.name}}</td>
      </tr>
      <tr>
          <td>Email</td><td>{{user.email}}</td>
      </tr>
      <tr>
          <td>Active</td><td>{{user.active ? "Active" : "Inactive"}}</td>
        </tr>
      </table>
    }
   
  `,
  styleUrl: './user-detail-page.css',
})
export class UserDetailPage {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  userId = this.route.snapshot.paramMap.get('id');
  user$ = this.usersService.getUser(this.userId);

}
