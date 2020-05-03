import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { IUser } from 'src/app/shared/interfaces/IUser';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginForm:FormGroup;
  submitted : boolean = false;
  constructor(private loginservice : LoginService,private router:Router,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  login(){
    this.submitted = true;
    if (this.adminLoginForm.valid) {
    var user : IUser = {username : this.adminLoginForm.get('username').value,password : this.adminLoginForm.get('password').value}
    var isAdmin = this.loginservice.login(user);
    if(isAdmin){
      this.toastrService.success('Admin logged in.', 'Covid Tracker');
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    }
    else{
      this.toastrService.error('Please try again. User is not admin', 'Covid Tracker');
    }
    
    }

    console.log(this.adminLoginForm);
  }
}
