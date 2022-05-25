import { TestBed } from '@angular/core/testing';

import { LoginTestService } from './login-test.service';

describe('LoginTestService', () => {
  let service: LoginTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
