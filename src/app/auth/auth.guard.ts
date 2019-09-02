import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';



@Injectable()

export class AuthGuard implements CanActivate {
  
  constructor(private router:Router) { }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('activeSession') === 'true'){
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
}
  

