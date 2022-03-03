import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../constants/route-config.constant';
import { LocalStorageUtils } from '../utils/localstorage-utils';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAuthorized();
  }


  checkIfAuthorized() {

    // Check User is Login or not
    if (!LocalStorageUtils.getUserData()) {
      return true;
    }

    // Navigate to home page
    this.router.navigate([ROUTE_CONFIG.HOME]);
    
    return false;
  }
}
