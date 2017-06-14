import { TestBed, inject } from '@angular/core/testing';

import { AuthoService } from './autho.service';

describe('AuthoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoService]
    });
  });

  it('should ...', inject([AuthoService], (service: AuthoService) => {
    expect(service).toBeTruthy();
  }));
});
