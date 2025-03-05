import { TestBed } from '@angular/core/testing';

import { PeleasService } from './peleas.service';

describe('PeleasService', () => {
  let service: PeleasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeleasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
