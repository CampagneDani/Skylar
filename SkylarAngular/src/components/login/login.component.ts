import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'SkylarAngular';

  success(){
    alert("submitted Account Succesfully")
  }
}
