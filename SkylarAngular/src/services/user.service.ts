import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {BankAccount} from "../models/bankaccount.model";
import {Project} from "../models/project.model";
import {Booking} from "../models/booking.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userURL = 'http://localhost:8080/user';
  getAllUser(){
    return this.http.get<User[]>(this.userURL);
  }

  createUser(registration: { password: string; email: string; username: string }): Observable<User> {
    return this.http.post<User>(this.userURL, registration);
  }


  deleteUser(id: number): Observable<unknown> {
    const url = `${this.userURL}/${id}`
    return this.http.delete(url)
  }


  findByTitle(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}?username=${username}`);
  }

  updateUser(user: { password: string; role: string; email: string; username: string, },
             id:number):Observable<User>{
    const url = `${this.userURL}/${id}`
    return this.http.put<User>(url,user)
  }
  /*
  updateBooking(user:{assignedBooking:Booking[]},id:number):Observable<User>{
    const url = `${this.userURL}/${id}`
    return this.http.put<User>(url,user)
  }
  updateProject(user:{assignedProject:Project[]},id:number):Observable<User>{
    const url = `${this.userURL}/${id}`
    return this.http.put<User>(url,user)
  }
  updateBankAccount(user:{assignedBankAccount:BankAccount[]},id:number):Observable<User>{
    const url = `${this.userURL}/${id}`
    return this.http.put<User>(url,user)
  }

  creat(registration: { password: string; email: string; username: string }): Observable<User> {
    return this.http.post<User>(this.userURL, registration);
  } */
}
