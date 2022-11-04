import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title= "SkylarAngular";

  constructor(private http:HttpClient,
                public router:Router,
              public authService:AuthenticationService) {
    const getRole = this.authService.getRole()


  }

}
