
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";


@Injectable()
export class FinanceGuardService implements CanActivate {

  constructor(private _router:Router,
              private authService:AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    const getRole = this.authService.getRole()
    if (getRole=== "Finance" || getRole ==="Admin")  {


      return true;
    }
    else{
      this._router.navigateByUrl("/home")
      return false;
    }

  }

}
