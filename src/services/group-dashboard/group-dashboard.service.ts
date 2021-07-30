import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import {
  Comment,
  GroupDashboardData,
  NewComment,
  NewTicket,
  PublicUser,
  UpdatedTicket,
} from 'src/shared/definitions/common';
import { EntityTypeComment } from 'src/shared/enums/entity-type-comment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class GroupDashboardService {
  data: GroupDashboardData | null = null;
  groupIdSelectedByUser = 0;
  isUserAdmin = false;
  allAppUsers: PublicUser[] = []

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  fetchGroupDashboardData(groupId: number) {
    return new Promise((resolve, reject) => {
      this.apiService.getGroupDashboardDataRequest(groupId).subscribe(
        (response) => {
          this.data = response;
          this.sortTicketHistory();
          this.checkIfUserIsAdmin();
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

  addCommentOnEntity(newComment: NewComment, entityType: EntityTypeComment) {
    if (entityType === EntityTypeComment.GROUP) {
      return this.addCommentOnGroup(newComment);
    } else if (entityType === EntityTypeComment.TICKET) {
      return this.addCommentOnTicket(newComment);
    } else {
      return new Promise((reject) => {
        reject('Wrong entity type');
      });
    }
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

  fetchAllAppUsers() {
    return new Promise((resolve, reject) => {
      this.apiService.getAllUsersAppRequest().subscribe(
        (response) => {
          this.allAppUsers = response;
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addUserOnGroup(userId: number) {
    return new Promise((resolve, reject) => {
      this.apiService.addUserOnGroupRequest({userId, groupId: this.groupIdSelectedByUser}).subscribe(
        () => {
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAllAppUsers() {
    return this.allAppUsers;
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
        ticket.usersOnTask.find((user) => user.id === userId)
      );
    } else {
      return [];
    }
  }

  getGroupComments(): Comment[] {
    if (this.data && this.data.commentsToDisplay.length > 0) {
      return this.data.commentsToDisplay;
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

  getIsUserAdmin() {
    return this.isUserAdmin;
  }

  resetData() {
    this.data = null;
    this.groupIdSelectedByUser = 0;
    this.isUserAdmin = false;
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

  private checkIfUserIsAdmin() {
    if (this.data && this.data.groupData) {
      this.isUserAdmin =
        this.userService.getUserData().id === this.data.groupData.creatorId;
    }
  }
}
