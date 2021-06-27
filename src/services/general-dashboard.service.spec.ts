import { TestBed } from '@angular/core/testing';

import { GeneralDashboardService } from './general-dashboard.service';

describe('GeneralDashboardService', () => {
  let service: GeneralDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
