import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LoginResponseModel} from "../models/login-response.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isloggedIn:boolean;
  constructor(private httpClient: HttpClient,
              private router:Router) {
    this.isloggedIn =false
  }

  login(username: string, password: string): Observable<string> {
   return this.httpClient.post<LoginResponseModel>('http://localhost:8080/login',{username,password}).pipe(map((response)=>{
      localStorage.setItem("username",response.username)
      localStorage.setItem("password",response.password)
      localStorage.setItem("role",response.role)
     this.isloggedIn=true
     return response.role     }))
  }
  isUserLoggedIn():boolean{
    return this.isloggedIn
  }
  logoutUser(){
    localStorage.clear();
    this.isloggedIn=false
    return this.router.navigateByUrl("/login")
  }
  getRole():string|null{
    return localStorage.getItem("role")
  }
  getUsername():string|null{
    return localStorage.getItem("username")
  }
  getUserId():number|null{
     return Number.parseInt(localStorage.getItem("id")!)
  }


}
