import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UserView } from "../user-view/user-view";

@Component({
  selector: 'app-user-detail-page',
  imports: [AsyncPipe, JsonPipe, UserView],
  template: `
    <h2>User Detail {{ userId }}</h2>

    @if (user$ | async; as user) {
    
      <app-user-view 
        [user]="user"
        (saved)="onSaved($event)"/>
      
    }
   
  `,
  styleUrl: './user-detail-page.css',
})
export class UserDetailPage {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  userId = this.route.snapshot.paramMap.get('id');
  user$ = this.usersService.getUser(this.userId);

  onSaved(user:User) {
    alert(JSON.stringify(user));
  }
}
