import { TestBed } from '@angular/core/testing';

import { AddTransferService } from './add-transfer.service';

describe('AddTransferService', () => {
  let service: AddTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
