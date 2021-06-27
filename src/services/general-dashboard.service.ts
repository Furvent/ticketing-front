import { Injectable } from '@angular/core';
import { GeneralDashboardData } from 'src/shared/definitions/general-dashboard-data';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralDashboardService {
  private data: GeneralDashboardData = {
    userId: 0,
    userUsername: '',
    userPseudo: '',
    userCreationAccountDate: '',
    groupsData: [],
  };

  constructor(private apiService: ApiService) {}

  /**
   * Test with promise and not Obervable
   * @param userId
   */
  fetchData(userId: number): void {
    this.apiService
      .getGeneralDashboardData(userId)
      .toPromise()
      .then((response) => {
        this.data = response;
      })
      .catch((error) => {
        console.error('Problem when fetch generalDashboardData', error);
      });
  }

  getUserData(): UserData {
    return {
      userId: this.data.userId,
      userUsername: this.data.userUsername,
      userPseudo: this.data.userPseudo,
      userCreationAccountDate: this.data.userCreationAccountDate,
    };
  }
}

type UserData = {
  userId: number;
  userUsername: string;
  userPseudo: string;
  userCreationAccountDate: string;
};
