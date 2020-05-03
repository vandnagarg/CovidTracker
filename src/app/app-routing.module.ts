import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard-routing.module';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[...dashboardRoutes]  },
  {path:'**',component:PagenotfoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    DashboardModule,
    SharedModule
  ]
})
export class AppRoutingModule { }
