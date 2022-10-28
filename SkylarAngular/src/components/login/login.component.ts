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
  //LoginForm to get Validators in HTML Input Tags
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(['', Validators.required, Validators.minLength(5)])
  });



  ngOnInit(): void {
  }

  //Form Checks Implemented from LoginForm, Checks the Validators explicit from Username
  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  //Form Check Implemented from LoginForm, Checks the Validators explicit from Password
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  //Login Func: checks with Backend and login will be full-filled if Status 200 from Backend
  login(): void {
    let username = this.loginForm.get('username')!.value;
    let password = this.loginForm.get('password')!.value;
    //Backend Call in Login Func: which routes to the user's role, if no error appears
    this.authenticationService.login(username, password).subscribe((role) => this.router.navigateByUrl("/"+role));
  }


}
