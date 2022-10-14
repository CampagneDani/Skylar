import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private userService:UserService,) {

  }
  user:User[]=[]

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAllUser().subscribe((dto:User[])=>{
      this.user = dto;
    })
  }


}

