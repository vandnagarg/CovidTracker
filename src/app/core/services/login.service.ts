import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInObs  =new Subject();

  private adminUser : IUser={
    username:"admin",
    password:"admin"
  }
  constructor() { }
  isLoggedIn() : boolean{
    if( localStorage.getItem('loggedIn') != null){
      return localStorage.getItem('loggedIn') == 'true' ? true:false;
    }
    else{
      return false;
    }
  }
 
  login(user:IUser){
    if(user.username == this.adminUser.username && user.password == this.adminUser.password){
      localStorage.setItem('loggedIn', 'true');
      this.loggedInObs.next(true);
      return true;
    }
    return false;
  }
  logout(){
    localStorage.clear();
    this.loggedInObs.next(false);
  }

}
