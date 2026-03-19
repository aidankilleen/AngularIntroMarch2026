import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface User {
  id?:number, 
  name?:string, 
  email?:string, 
  active?:boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.url);
  }

  getUser(id: number | string | null): Observable<User> {
   
    return this.http.get<User>(`${this.url}/${id}`);

    
  }

  // create
  // update
  // delete


}
