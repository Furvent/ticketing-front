import { Component, OnInit } from '@angular/core';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { GroupData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  groupsListData: GroupData[] = [];

  constructor(private gdService: GeneralDashboardService) {}

  ngOnInit(): void {
    this.groupsListData = this.gdService.getGroupsData().groupsData;
  }
}
