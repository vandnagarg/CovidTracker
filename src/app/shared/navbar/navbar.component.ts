import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  loggedin:boolean;

  constructor(private loginService : LoginService,private router:Router) {
    this.loggedin = <boolean>this.loginService.isLoggedIn();
    this.loginService.loggedInObs.subscribe(val => {
      this.loggedin = <boolean>val;
      console.log(this.loggedin)
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    
  }

  logout(){
    this.loginService.logout();
    this.loggedin = false;
    this.router.navigate(['/dashboard']);

  }

}
