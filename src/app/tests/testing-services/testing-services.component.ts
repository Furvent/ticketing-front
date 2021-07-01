import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import {
  GroupDashboardData,
  GroupData,
  LoginForm,
  NewComment,
  NewTicket,
  NewUser,
  UpdatedTicket,
  UpdatedUser,
  UserData,
} from 'src/shared/definitions/common';

@Component({
  selector: 'app-testing-services',
  templateUrl: './testing-services.component.html',
  styleUrls: ['./testing-services.component.scss'],
})
export class TestingServicesComponent implements OnInit {
  mockedGroupId = 1;

  mockedLoginForm: LoginForm = {
    username: 'mimi',
    password: 'pwdMimi',
  };

  mockedNewUser: NewUser = {
    username: 'mimi2',
    password: 'abc',
    pseudo: 'altMimi',
  };

  mockedUpdatedUser: UpdatedUser = {
    username: 'mimi',
    oldPassword: 'pwdMimi',
    newPassword: 'haha',
    newPseudo: 'altMimi',
  };

  mockedNewTicket: NewTicket = {
    description: 'New cool description',
    title: 'New cool title',
    groupId: 1,
    usersOnTask: [],
  };

  mockedUpdatedTicket: UpdatedTicket = {
    newDescription: 'New cool description updated',
    newTitle: 'New cool title updated',
    ticketId: 1,
    usersOnTask: [],
    newStatus: '',
  };

  mockedNewCommentOnTicket: NewComment = {
    author: "Furvent",
    text: "A new comment on a ticket",
    entityId: 2,
  }

  mockedNewCommentOnGroup: NewComment = {
    author: "Furvent",
    text: "A new comment on a group",
    entityId: 1,
  }

  userData: UserData | null = null;
  groupsData: GroupData[] = [];
  groupDashboardData: GroupDashboardData | null = null;

  constructor(
    private generalService: GeneralDashboardService,
    private groupService: GroupDashboardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.testLogin();
    // this.testNewUser();
    setTimeout(() => {
      // this.testGetGeneralDashboardData();
      this.testGetGroupDashboardData(this.mockedGroupId);
      setTimeout(() => {
        // this.testAddGroup('test de group');
        // this.testUpdateTicket(this.mockedUpdatedTicket);
      this.testAddCommentOnTicket(this.mockedNewCommentOnTicket);
      this.testAddCommentOnGroup(this.mockedNewCommentOnGroup);
        setTimeout(() => {
          console.log('groupDashboardData', this.groupDashboardData);
        }, 500);
      }, 500);
    }, 500);
  }

  private testLogin(): void {
    this.userService
      .login(this.mockedLoginForm)
      .then((response) => {
        this.userData = this.userService.getUserData();
      })
      .catch((error) => {
        console.error('Error is : ', error);
      });
  }

  private testNewUser(): void {
    this.userService
      .signUp(this.mockedNewUser)
      .then((response) => {
        this.userData = this.userService.getUserData();
      })
      .catch((error) => {
        console.error('Error is : ', error.error); // To see error details (here, Login already used)
      });
  }

  private testUpdateUser(): void {
    this.userService
      .updateUser(this.mockedUpdatedUser)
      .then((response) => {
        this.userData = this.userService.getUserData();
      })
      .catch((error) => {
        console.error('Error is : ', error);
      });
  }

  private testGetGeneralDashboardData(): void {
    this.generalService
      .fetchGeneralDashboardData()
      .then((response) => {
        this.groupsData = this.generalService.getGroupsData().groupsData;
      })
      .catch((error) => {
        console.error('Error is : ', error);
      });
  }

  private testAddGroup(name: string): void {
    this.generalService
      .addGroup(name)
      .then((response) => {
        this.groupsData = this.generalService.getGroupsData().groupsData;
      })
      .catch((error) => {
        console.error('testAddGroup Error is : ', error);
      });
  }

  private testGetGroupDashboardData(groupId: number) {
    this.groupService
      .fetchGroupDashboardData(groupId)
      .then(() => {
        this.groupDashboardData = this.groupService.getGroupDashboardData();
      })
      .catch((error) => {
        console.error('testGetGroupDashboardData Error is : ', error);
      });
  }

  private testAddTicket(newTicket: NewTicket) {
    this.groupService
      .addTicket(newTicket)
      .then(() => {
        this.groupDashboardData = this.groupService.getGroupDashboardData();
      })
      .catch((error) => {
        console.error('testGetGroupDashboardData Error is : ', error);
      });
  }

  private testUpdateTicket(updatedTicket: UpdatedTicket) {
    this.groupService
      .updateTicket(updatedTicket)
      .then(() => {
        this.groupService
          .fetchGroupDashboardData(this.mockedGroupId)
          .then(() => {
            this.groupDashboardData = this.groupService.getGroupDashboardData();
          });
      })
      .catch((error) => {
        console.error('testGetGroupDashboardData Error is : ', error);
      });
  }

  private testAddCommentOnTicket(newComment: NewComment) {
    this.groupService
      .addCommentOnTicket(newComment)
      .then(() => {
        this.groupService
          .fetchGroupDashboardData(this.mockedGroupId)
          .then(() => {
            this.groupDashboardData = this.groupService.getGroupDashboardData();
          });
      })
      .catch((error) => {
        console.error('testAddCommentOnTicket Error is : ', error);
      });
  }

  private testAddCommentOnGroup(newComment: NewComment) {
    this.groupService
      .addCommentOnGroup(newComment)
      .then(() => {
        this.groupService
          .fetchGroupDashboardData(this.mockedGroupId)
          .then(() => {
            this.groupDashboardData = this.groupService.getGroupDashboardData();
          });
      })
      .catch((error) => {
        console.error('testAddCommentOnGroup Error is : ', error);
      });
  }
}
