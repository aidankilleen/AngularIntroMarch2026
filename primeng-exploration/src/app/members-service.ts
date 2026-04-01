import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root',
})
export class MembersService {

  private http = inject(HttpClient);
  private url = "https://api.acodingtutor.com/members";

  getMembers():Observable<Member[]> {

    return this.http.get<Member[]>(this.url);
  }

  updateMember(member:Member):Observable<Member> {

    return this.http.put<Member>(`${this.url}/${member.id}`, member);
  }

}
