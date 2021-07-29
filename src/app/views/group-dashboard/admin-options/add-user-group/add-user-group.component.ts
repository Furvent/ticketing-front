import { Component, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { PublicUser } from 'src/shared/definitions/common';

import { differenceWith } from 'lodash';

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.scss'],
})
export class AddUserGroupComponent implements OnInit {
  usersGroup: PublicUser[] = [];
  appAllUsers: PublicUser[] = [];
  usersAddable: PublicUser[] = [];

  userSelected!: PublicUser;
  // groupUserPseudoSelectOptions: String[] = [];
  constructor(private groupService: GroupDashboardService) {}

  ngOnInit(): void {
    this.getAppAllUsersAndSetUsersAddable();
  }

  getAppAllUsersAndSetUsersAddable() {
    this.usersGroup = this.groupService.getAllGroupUsers();
    this.groupService.fetchAllAppUsers().then(() => {
      this.appAllUsers = this.groupService.getAllAppUsers();
      this.usersAddable = differenceWith(
        this.appAllUsers,
        this.usersGroup,
        (userA, userB) => userA.id === userB.id
      );
    });
  }

  addUserOnGroup() {
    this.groupService.addUserOnGroup(this.userSelected.id).then(() => {
      this.groupService
        .fetchGroupDashboardData(this.groupService.getGroupIdSelectedByUser())
        .then(() => {
          this.getAppAllUsersAndSetUsersAddable();
        });
    });
  }

  // getSelectedUser() {
  //   return this.appAllUsers.filter((user) => {
  //     return this.pseudosSelected.value.find(
  //       (pseudo: string) => user.pseudo === pseudo
  //     );
  //   });
  // }
}
