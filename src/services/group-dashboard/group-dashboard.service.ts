import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import {
  GroupDashboardData,
  NewComment,
  NewTicket,
  UpdatedTicket,
} from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class GroupDashboardService {
  data: GroupDashboardData | null = null;
  groupIdSelectedByUser: number = 0;

  constructor(private apiService: ApiService) {}

  fetchGroupDashboardData(groupId: number) {
    return new Promise((resolve, reject) => {
      this.apiService.getGroupDashboardDataRequest(groupId).subscribe(
        (response) => {
          this.data = response;
          this.sortTicketHistory();
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

  addCommentOnTicket(newComment: NewComment) {
    return new Promise((resolve, reject) => {
      this.apiService.addTicketCommentRequest(newComment).subscribe(
        () => {
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addCommentOnGroup(newComment: NewComment) {
    return new Promise((resolve, reject) => {
      this.apiService.addGroupCommentRequest(newComment).subscribe(
        () => {
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * Sort tickets history before sending back data
   * @returns Data used to display a group's dashboard
   */
  getGroupDashboardData() {
    // this.data?.ticketsData.forEach(ticket => {
    //   ticket.history.sort((statusA, statusB) => {
    //     return (new Date(statusA.date).getTime()) - (new Date(statusB.date).getTime());
    //   })
    // })
    return this.data;
  }

  getAllTickets() {
    if (this.data && this.data.ticketsData.length > 0) {
      return this.data.ticketsData;
    } else {
      return [];
    }
  }

  getAllGroupUsers() {
    if (this.data && this.data.groupData.users.length > 0) {
      return this.data.groupData.users;
    } else {
      return [];
    }
  }

  getAllTicketsWithUserId(userId: number) {
    if (this.data && this.data.ticketsData.length > 0) {
      return this.data.ticketsData.filter((ticket) =>
        ticket.usersOnTask.find((user) => (user.id === userId))
      );
    } else {
      return [];
    }
  }

  getGroupIdSelectedByUser() {
   return this.groupIdSelectedByUser;
  }

  setGroupIdSelectedByUser(id: number) {
    this.groupIdSelectedByUser = id;
  }

  private sortTicketHistory() {
    if (this.data && this.data.ticketsData.length > 0) {
      this.data.ticketsData.forEach((ticket) => {
        ticket.history.sort((statusA, statusB) => {
          return (
            new Date(statusA.date).getTime() - new Date(statusB.date).getTime()
          );
        });
      });
    }
  }
}
