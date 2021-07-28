import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { PublicUser } from 'src/shared/definitions/common';

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.scss'],
})
export class AddUserGroupComponent implements OnInit {
  usersGroup: PublicUser[] = [];
  appAllUsers: PublicUser[] = [];
  pseudosSelected: FormControl;
  groupUserPseudoSelectOptions: String[] = [];
  constructor(private groupService: GroupDashboardService) {
    this.pseudosSelected = new FormControl();
  }

  ngOnInit(): void {
    this.usersGroup = this.groupService.getAllGroupUsers();
    this.groupService.fetchAllAppUsers().then(() => {
      this.appAllUsers = this.groupService.getAllAppUsers();
    })
  }

  getSelectedUser() {
    return this.appAllUsers.filter((user) => {
      return this.pseudosSelected.value.find(
        (pseudo: string) => user.pseudo === pseudo
      );
    });
  }
}
