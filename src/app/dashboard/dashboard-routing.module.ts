import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { LatestNewsComponent } from './news/latest-news/latest-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../core/guards/auth.service';
import { PrecautionsComponent } from './precautions/precautions.component';


export const dashboardRoutes: Routes = [
  {path:'add-news',component:AddNewsComponent,canActivate:[AuthService]},
  {path:'latest-news',component:LatestNewsComponent},
  {path:'precautions',component:PrecautionsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(dashboardRoutes),
    SharedModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardRoutingModule { }
