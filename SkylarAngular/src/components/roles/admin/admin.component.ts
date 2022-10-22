import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private userService:UserService,) {

  }

  updUsername=""
  updPassword=""
  updEmail=""
  updRole=""
  user:User[]=[]
  hidden = [false]

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAllUser().subscribe((dto:User[])=>{
      this.user = dto;
    })
  }
  updateRole(id:number){
    this.userService.updateUser({

      username: this.updUsername,
      password:this.updPassword,
      email:this.updEmail,
      role:this.updRole,
    },id).subscribe(user =>{
      console.log(user),
      this.getAllUser()

    })

  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(()=>{this.getAllUser()})
  }



}

