import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidStatsService } from 'src/app/core/services/covid-stats.service';

import { DistrictsComponent } from './districts.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('DistrictsComponent', () => {
  let component: DistrictsComponent;
  let fixture: ComponentFixture<DistrictsComponent>;

  const mockData=[
    {
      "Andaman and Nicobar Islands":{
        districtData: {
          "North and Middle Andaman": {
            active :2,
            confirmed :4,
            deaths :1,
            recovered :1,
          },
        }
      }
    }
  ]
  const state ={
    active: 22,
    confirmed:33,
    deaths: 0,
    recovered: 11,
    state: "Andaman and Nicobar Islands",
    statecode: "AN",
  };
  const CovidStatsServiceStub= {
    getDistictWiseCovidData: jasmine.createSpy('getDistictWiseCovidData').and.returnValue(of(mockData)),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ DistrictsComponent ],
      providers:[{CovidStatsService,useValue:CovidStatsServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Districts check', () => {
    component.state= state;
    expect(component.districtData.length).toEqual(0);
  });
});
