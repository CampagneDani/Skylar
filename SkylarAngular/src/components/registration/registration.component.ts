import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router:Router) {
  }
  goToPage(pageName:string){
    this.router.navigate([pageName]);

  }

}
