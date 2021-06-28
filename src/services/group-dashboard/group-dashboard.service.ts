import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { GroupDashboardData } from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class GroupDashboardService {
  data: GroupDashboardData | null = null;

  constructor(apiService: ApiService) {}

  fetchGroupDashboardData(groupId: number) {
    return new Promise((resolve, reject) => {
      
    })
  }
}
