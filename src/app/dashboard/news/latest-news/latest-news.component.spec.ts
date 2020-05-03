import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsComponent } from './latest-news.component';
import { NewsService } from 'src/app/core/services/news.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  const mockData = [];

  const getNewsStub = {
    getNews: jasmine.createSpy('getNews').and.returnValue(mockData),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsComponent ],
      imports:[HttpClientModule],
      providers:[{NewsService,useValue:getNewsStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('news get', () => {
    component.allnews = [];
    expect(component.allnews.length).toEqual(0);
  });
});
