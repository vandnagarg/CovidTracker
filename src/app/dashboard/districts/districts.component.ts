import { Component, OnInit, Input } from '@angular/core';
import { CovidStatsService } from 'src/app/core/services/covid-stats.service';
import { IState } from 'src/app/shared/interfaces/IState';
import { IDistrict, District } from 'src/app/shared/interfaces/IDistict';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  @Input() state : IState;
  districtData : IDistrict[] = [];

  constructor(private covidStatsService : CovidStatsService) { }

  ngOnInit(): void {
    this.districtData = [];
    this.covidStatsService.getDistictWiseCovidData()
    .subscribe(data =>{
      var selectedDistrict = data[this.state.state].districtData;
      var districts =  Object.keys(selectedDistrict);
      for(let dist of districts){
        this.districtData.push( new District(dist, selectedDistrict[dist]));
      }
    })
  }

}
