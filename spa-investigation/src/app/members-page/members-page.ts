import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member-service';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: 'members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {

  members: Member[] = [];
  isLoading = true;
  errorMessage = '';


  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
       this.memberService.getMembers().subscribe({
      next: (data) => {
        this.members = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load members.';
        this.isLoading = false;
      }
    });
  }



}
