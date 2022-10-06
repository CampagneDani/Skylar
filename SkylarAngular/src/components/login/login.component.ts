import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router,
            private userService:UserService) {
}
  username=""
  password=""
  user:User[]=[]

  getRegistration(){
    this.userService.getAllUser().subscribe((dto:User[]) => {
      this.user = dto
    },(error:HttpErrorResponse) => {alert(error.message)} )
  }

}
