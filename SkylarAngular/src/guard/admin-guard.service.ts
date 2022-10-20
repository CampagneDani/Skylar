
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";


@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private _router:Router,
              private authService:AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    //check some condition
    if (this.authService.getRole() === "Admin")  {


      return true;
    }
    else{
      this._router.navigateByUrl("/home")
      return false;
    }

  }

}
