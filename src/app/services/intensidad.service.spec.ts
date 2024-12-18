import { TestBed } from '@angular/core/testing';

import { IntensidadService } from './intensidad.service';

describe('IntensidadService', () => {
  let service: IntensidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntensidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
