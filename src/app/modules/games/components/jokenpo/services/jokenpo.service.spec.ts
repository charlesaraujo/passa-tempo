import { TestBed } from '@angular/core/testing';

import { JokenpoService } from './jokenpo.service';

describe('JokenpoService', () => {
  let service: JokenpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokenpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
