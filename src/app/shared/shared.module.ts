import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    NavbarComponent,
    PagenotfoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports:[
      NavbarComponent,
      PagenotfoundComponent,
      ToastrModule
  ]
})
export class SharedModule { }
