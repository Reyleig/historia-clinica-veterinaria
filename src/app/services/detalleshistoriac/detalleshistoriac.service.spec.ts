import { TestBed } from '@angular/core/testing';

import { DetalleshistoriacService } from './detalleshistoriac.service';

describe('DetalleshistoriacService', () => {
  let service: DetalleshistoriacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleshistoriacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
