import { NgModule } from '@angular/core';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { LatestNewsComponent } from './news/latest-news/latest-news.component';
import { AdminModule } from '../admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewsInMemoryDataService } from '../core/services/news-in-memory-data.service';
import { DistrictsComponent } from './districts/districts.component';
import { StatesComponent } from './states/states.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PrecautionsComponent,
    AddNewsComponent,
    LatestNewsComponent,
    DistrictsComponent,
    StatesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(NewsInMemoryDataService,{dataEncapsulation:false,passThruUnknownUrl: true}),
  ],
  exports:[
    DashboardComponent,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
