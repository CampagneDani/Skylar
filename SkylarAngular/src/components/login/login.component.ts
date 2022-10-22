import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
constructor(private router:Router,
            private userService:UserService,
            private authenticationService: AuthenticationService,

            ) {
}
 zero=""
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(['', Validators.required, Validators.minLength(5)])
  });



  ngOnInit(): void {
  }
  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  login(): void {
    let username = this.loginForm.get('username')!.value;
    let password = this.loginForm.get('password')!.value;

    this.authenticationService.login(username, password).subscribe((role) => this.router.navigateByUrl("/"+role));
  }


}
