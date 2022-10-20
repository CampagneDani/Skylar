import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from "../models/user.model";
import {UserService} from "./user.service";
import {LoginResponseModel} from "../models/login-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<string> {
   return this.httpClient.post<LoginResponseModel>('http://localhost:8080/login',{username,password}).pipe(map((response)=>{
      localStorage.setItem("username",response.username)
      localStorage.setItem("password",response.password)
      localStorage.setItem("role",response.role)
     return response.role
    }))


  }

  getRole():string|null{
    return localStorage.getItem("role")
  }


}
