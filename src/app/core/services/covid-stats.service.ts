import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  constructor(private http:HttpClient) { }
  apiUrl : string = "";

  getCovidData() : Observable<any> {
    return  this.http.get('https://api.covid19india.org/data.json');
  }
  getDistictWiseCovidData(): Observable<any> {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }
}
