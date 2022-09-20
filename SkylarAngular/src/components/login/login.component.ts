import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router) {
}
  goToPage(pageName:string){
    this.router.navigate([pageName]);

  }

}
