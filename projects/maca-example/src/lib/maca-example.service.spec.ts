import { TestBed } from '@angular/core/testing';

import { MacaExampleService } from './maca-example.service';

describe('MacaExampleService', () => {
  let service: MacaExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacaExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
