import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'foryoupage-component',
  templateUrl: './foryoupage.component.html',
  styleUrls: ['./foryoupage.component.css']
})
export class ForyoupageComponent {
  constructor(private http: HttpClient,
              public router: Router,
              public authService: AuthenticationService) {
    const getRole = this.authService.getRole()

  }
}

