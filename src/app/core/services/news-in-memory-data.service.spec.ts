import { TestBed } from '@angular/core/testing';

import { NewsInMemoryDataService } from './news-in-memory-data.service';

describe('NewsInMemoryDataService', () => {
  let service: NewsInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
