import { TestBed } from '@angular/core/testing';

import { IonicStorageService } from './ionic-storage.service';

describe('IonicStorageService', () => {
  let service: IonicStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
