import { TestBed } from '@angular/core/testing';

import { DebtTableService } from './debt-table.service';

describe('DebtTableService', () => {
  let service: DebtTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
