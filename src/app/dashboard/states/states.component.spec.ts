import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IState } from 'src/app/shared/interfaces/IState';

import { StatesComponent } from './states.component';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;
  const mockState = [{
    active :2,
    confirmed :4,
    deaths :1,
    recovered :1,
    state :"Total",
    statecode :"sd"
  },
  {
    active :2,
    confirmed :4,
    deaths :1,
    recovered :1,
    state :"Punjab",
    statecode :"sd"
  }];
  const selectedState = {
    active :2,
    confirmed :4,
    deaths :1,
    recovered :1,
    state :"Punjab",
    statecode :"sd"
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('fetch state data', () => {
    component.statesData = mockState;
    component.selectedState = mockState[0];
    component.getStateData(selectedState);
    expect(component.showDistData).toEqual(true);
  });
});
