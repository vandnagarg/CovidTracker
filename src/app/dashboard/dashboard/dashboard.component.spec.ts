import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidStatsService } from '../../core/services/covid-stats.service';

import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockData= 
        {
          statewise: [
            {
              active :2,
              confirmed :4,
              deaths :1,
              recovered :1,
              state :"Total",
              statecode :"hdsf"
            },
            {
              active :2,
              confirmed :4,
              deaths :1,
              recovered :1,
              state :"sdvnsdf",
              statecode :"hdsf"
            }
          ]
        };

  const CovidStatsServiceStub ={
    getCovidData: jasmine.createSpy('getCovidData').and.returnValue(of(mockData)),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ DashboardComponent ],
      providers:[{CovidStatsService,useValue:CovidStatsServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch data', () => {
    expect(component.statesData.length).toEqual(2);
  });

});
