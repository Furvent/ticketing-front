import { Component, OnInit } from '@angular/core';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { GroupData } from 'src/shared/definitions/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  userPseudo: string;
  groupsListData: GroupData[] = [];
  // Use to display table
  displayedColumns: string[] = ['name', 'creator', 'creationDate', 'button'];

  constructor(
    private gdService: GeneralDashboardService,
    private userService: UserService,
    private groupService: GroupDashboardService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.userPseudo = this.userService.getUserData().pseudo;
  }

  ngOnInit(): void {
    this.groupsListData = this.gdService.getGroupsData().groupsData;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; // To put autocus on first input field
    dialogConfig.data = {
      name: '',
    };
    const dialogRef = this.dialog.open(CreateGroupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this.createNewGroup(data);
      }
    });
  }

  getCreatorPseudoFromGroupData(groupData: GroupData) {
    const creatorGroupId = groupData.creatorId;
    const pseudo = groupData.users.find((user) => {
      return user.id === creatorGroupId;
    })?.pseudo;
    return pseudo === this.userPseudo ? 'Yourself' : pseudo;
  }

  enterGroup(groupId: number) {
    console.log("groupIdSelected in button", groupId);
    this.groupService.setGroupIdSelectedByUser(groupId);
    this.router.navigate(['group-dashboard']);
  }

  openCreateGroupModal() {
    this.openDialog();
  }

  createNewGroup(newGroupName: string) {
    this.gdService.addGroup(newGroupName).then(() => {
      this.gdService.fetchGeneralDashboardData().then(() => {
        const newData: GroupData[] = [];
        this.groupsListData = newData.concat(
          this.gdService.getGroupsData().groupsData
        );
      });
    });
  }
}
