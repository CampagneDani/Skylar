import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private userService:UserService,private router:Router,) {
  }

  navigateToLogin(){
    alert("You will be redirected to the Login Page after Pressing: 'Ok'!")
    setTimeout(() =>
      {
        this.router.navigate(['/login']);
      },
      2000);
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
