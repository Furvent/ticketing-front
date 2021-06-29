import { Component, Input, OnInit } from '@angular/core';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { GroupData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  userPseudo: string;
  groupsListData: GroupData[] = [];
  displayedColumns: string[] = ['name', 'creator', 'creationDate', 'button'];

  constructor(private gdService: GeneralDashboardService, private userService: UserService) {
    this.userPseudo = this.userService.getUserData().pseudo;
  }

  ngOnInit(): void {
    this.groupsListData = this.gdService.getGroupsData().groupsData;
  }

  getCreatorPseudoFromGroupData(groupData: GroupData) {
    const creatorGroupId = groupData.creatorId;
    const pseudo = groupData.users.find(user => {
      return user.id === creatorGroupId;
    })?.pseudo
    return pseudo === this.userPseudo ? 'Yourself' : pseudo
  }

  enterGroup(groupId: number) {
    console.log("groupId", groupId);
  }

  createNewGroup() {
    this.gdService.addGroup("")
  }
}
