import { Component, OnInit } from '@angular/core';
import { CovidStatsService } from '../../core/services/covid-stats.service';
import { IState } from '../../shared/interfaces/IState';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statesData : IState[];
  totalcases : IState ={};
  constructor(private covidStatsService : CovidStatsService) { }

  ngOnInit(): void {
    this.covidStatsService.getCovidData()
    .subscribe(data =>{
      this.statesData = data["statewise"].filter(data=>data.state != "Total");
      this.totalcases = data["statewise"].filter(data=>data.state == "Total")[0];
      console.log(this.totalcases)
    });
  }
  
}
