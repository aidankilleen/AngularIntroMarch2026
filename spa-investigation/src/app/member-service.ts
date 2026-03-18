import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from './models/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private url = 'https://api.acodingtutor.com/members';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
  }  
}
