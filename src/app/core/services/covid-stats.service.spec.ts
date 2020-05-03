import { TestBed } from '@angular/core/testing';

import { CovidStatsService } from './covid-stats.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('CovidStatsService', () => {
  let service: CovidStatsService;
  const mockData = 
        {
          "statewise": [
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

  const httpClientStub={
    get: jasmine.createSpy('get').and.returnValue(of(mockData)),
  };     

  beforeEach(() => {
    TestBed.configureTestingModule({});
    providers:[CovidStatsService,
      {provide:HttpClient,useValue:httpClientStub},
      HttpHandler] 

    service = TestBed.inject(CovidStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
