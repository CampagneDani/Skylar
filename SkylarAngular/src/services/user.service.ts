import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";


const userURL = 'http://localhost:8080/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get<User[]>(userURL);
  }

  createUser(registration: User): Observable<User> {
    return this.http.post<User>(userURL, registration);
  }


  deleteUser(id: number): Observable<unknown> {
    const url = `${userURL}/${id}`
    return this.http.delete(url)
  }


  findByTitle(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${userURL}?username=${username}`);
  }
}
