import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private loginServie : LoginService,private router:Router) { }

  canActivate(): boolean {
    if (!this.loginServie.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
