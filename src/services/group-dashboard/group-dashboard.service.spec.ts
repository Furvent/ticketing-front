import { TestBed } from '@angular/core/testing';

import { GroupDashboardService } from './group-dashboard.service';

describe('GroupDashboardService', () => {
  let service: GroupDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
