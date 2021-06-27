import { Injectable } from '@angular/core';
import { GeneralDashboardData, UserData } from 'src/shared/definitions/common';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralDashboardService {
  private data: GeneralDashboardData = {
    groupsData: [],
  };

  constructor(private apiService: ApiService) {}

  /**
   * Test with promise and not Obervable
   * @param userId
   */
  fetchData(userId: number): void {
    this.apiService
      .getGeneralDashboardDataRequest(userId)
      .toPromise()
      .then((response) => {
        this.data = response;
      })
      .catch((error) => {
        console.error('Problem when fetch generalDashboardData', error);
      });
  }
}
