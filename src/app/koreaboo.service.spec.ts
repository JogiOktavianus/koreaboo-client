import { TestBed } from '@angular/core/testing';

import { KoreabooService } from './koreaboo.service';

describe('KoreabooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoreabooService = TestBed.get(KoreabooService);
    expect(service).toBeTruthy();
  });
});
