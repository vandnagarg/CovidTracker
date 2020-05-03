import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      ReactiveFormsModule,
      RouterModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AdminModule { }
