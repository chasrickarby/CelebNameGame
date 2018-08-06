import { TestBed, inject } from '@angular/core/testing';

import { MovieIdService } from './movie-id.service';

describe('MovieIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieIdService]
    });
  });

  it('should be created', inject([MovieIdService], (service: MovieIdService) => {
    expect(service).toBeTruthy();
  }));
});
