import { TestBed, async } from '@angular/core/testing';
import { LoginService } from '../services/login.service';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[{LoginService}],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
