import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { GeneralDashboardData } from 'src/shared/definitions/common';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralDashboardService {
  private data: GeneralDashboardData = {
    groupsData: [],
  };

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  fetchGeneralDashboardData() {
    return new Promise((resolve, reject) => {
      const userId = this.userService.getUserData().id;
      if (userId !== undefined) {
        this.apiService.getGeneralDashboardDataRequest(userId).subscribe(
          (response) => {
            this.data = response;
            resolve(true);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject('No user id found to fetch generalDashboardData');
      }
    });
  }

  addGroup(name: string) {
    return new Promise((resolve, reject) => {
      const creatorId = this.userService.getUserData().id;
      if (creatorId !== undefined) {
        this.apiService.addGroupRequest({ name, creatorId }).subscribe((response) => {
          console.log("response after create group", response)
          this.data.groupsData.push(response);
          console.log("this.data.groupsData after create group", this.data.groupsData)
          resolve(true);
        }, (error) => {
          reject(error);
        });
      } else {
        reject('No user id found to create new group');
      }
    });
  }

  getGroupsData() {
    return this.data;
  }

  resetData() {
    this.data.groupsData = [];
  }
}
