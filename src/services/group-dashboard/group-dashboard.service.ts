import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { GroupDashboardData, NewTicket, UpdatedTicket } from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class GroupDashboardService {
  data: GroupDashboardData | null = null;

  constructor(private apiService: ApiService) {}

  fetchGroupDashboardData(groupId: number) {
    return new Promise((resolve, reject) => {
      this.apiService.getGroupDashboardDataRequest(groupId).subscribe(
        (response) => {
          this.data = response;
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addTicket(newTicket: NewTicket) {
    return new Promise((resolve, reject) => {
      this.apiService.addTicketRequest(newTicket).subscribe(
        (response) => {
          this.data?.ticketsData.push(response);
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  updateTicket(updatedTicket: UpdatedTicket) {
    return new Promise((resolve, reject) => {
      this.apiService.updateTicketRequest(updatedTicket).subscribe(
        () => {
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getGroupDashboardData() {
    return this.data;
  }
}
