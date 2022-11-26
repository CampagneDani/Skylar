import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService,
              public authService:AuthenticationService) {

  }

  updUsername = ""
  updPassword = ""
  updEmail = ""
  updRole = ""
  user: User[] = []
  hidden = [false]

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((dto: User[]) => {
      this.user = dto;
    })
  }

  updateRole(id: number) {
    this.userService.updateUser({

      username: this.updUsername,
      password: this.updPassword,
      email: this.updEmail,
      role: this.updRole,
    }, id).subscribe(user => {
      console.log(user),
        this.getAllUser()

    })

  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getAllUser()
    })
  }
}
