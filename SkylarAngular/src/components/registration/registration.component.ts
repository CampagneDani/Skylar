import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

import {User} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private userService:UserService) {
  }
 ngOnInit(){
    this.getRegistration()

 }
 username=""
  password=""
  email=""
  user:User[]=[]

  deleteRegistration(id:number){
    this.userService.deleteUser(id).subscribe(() =>{
      this.getRegistration
    })
  }
  getRegistration(){
    this.userService.getAllUser().subscribe((dto:User[]) => {
      this.user = dto
    },(error:HttpErrorResponse) => {alert(error.message)} )
  }
  createRegistration(){
    this.userService.createUser({
      username: this.username,
      password:this.password,
      email:this.email

    }).subscribe(user =>
    {
      this.getRegistration()
      })
  }

}
