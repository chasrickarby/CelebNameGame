import { TestBed, inject } from '@angular/core/testing';

import { CastSearchService } from './cast-search.service';

describe('CastSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastSearchService]
    });
  });

  it('should be created', inject([CastSearchService], (service: CastSearchService) => {
    expect(service).toBeTruthy();
  }));
});
