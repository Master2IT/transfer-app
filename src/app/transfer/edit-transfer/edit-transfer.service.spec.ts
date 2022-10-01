import { TestBed } from '@angular/core/testing';

import { EditTransferService } from './edit-transfer.service';

describe('EditTransferService', () => {
  let service: EditTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
