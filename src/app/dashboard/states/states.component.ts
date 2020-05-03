import { Component, OnInit, Input } from '@angular/core';
import { IState } from 'src/app/shared/interfaces/IState';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  @Input() statesData:IState[];
  
  showDistData:boolean = false;
  selectedState : IState = null;

  constructor() { }

  ngOnInit(): void {
  }
  getStateData(state:IState){
    this.showDistData = (this.showDistData == true && this.selectedState != null && this.selectedState.state == state.state) ? false : true;
    this.selectedState = state;
  }
}
