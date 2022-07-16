import { TestBed } from '@angular/core/testing';

import { AutoresServicesService } from './autores-services.service';

describe('AutoresServicesService', () => {
  let service: AutoresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
