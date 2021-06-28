import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import {
  GroupData,
  LoginForm,
  NewUser,
  UpdatedUser,
  UserData,
} from 'src/shared/definitions/common';

@Component({
  selector: 'app-testing-services',
  templateUrl: './testing-services.component.html',
  styleUrls: ['./testing-services.component.scss'],
})
export class TestingServicesComponent implements OnInit {
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

  userData: UserData | null = null;
  groupsData: GroupData[] = [];

  constructor(
    private apiService: ApiService,
    private generalService: GeneralDashboardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.testLogin();
    // this.testNewUser();
    setTimeout(() => {
      this.testGetGeneralDashboardData();
      setTimeout(() => {
        this.testAddGroup("test de group");
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
      .signIn(this.mockedNewUser)
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
        this.groupsData = this.generalService.getGroupsData();
      })
      .catch((error) => {
        console.error('Error is : ', error);
      });
  }

  private testAddGroup(name: string): void {
    this.generalService
      .addGroup(name)
      .then((response) => {
        this.groupsData = this.generalService.getGroupsData();
      })
      .catch((error) => {
        console.error('testAddGroup Error is : ', error);
      });
  }
}
