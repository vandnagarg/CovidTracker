import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/core/services/login.service';

import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockUser = {
    username:"admin",
    password:"password"
  }
  const loginServiceStub = {
    login: jasmine.createSpy('login').and.returnValue(mockUser),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers:[{LoginService,useValue:loginServiceStub},  {provide: ToastrService, useClass: ToastrService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
