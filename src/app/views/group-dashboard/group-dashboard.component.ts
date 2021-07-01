import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';
import { AllTicketsListComponent } from './all-tickets-list/all-tickets-list.component';
import { MyTicketsListComponent } from './my-tickets-list/my-tickets-list.component';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss']
})
export class GroupDashboardComponent implements OnInit {

  @ViewChild(MyTicketsListComponent)
  private myTicketsComponent!: MyTicketsListComponent;

  @ViewChild(AllTicketsListComponent)
  private allTicketscomponent!: AllTicketsListComponent;

  // TODO: Remove all ref to groupId, and get it in service groupDashboard
  groupIdSelected: number;

  isLoadingData = true;

  constructor(private groupService: GroupDashboardService) { 
    this.groupIdSelected = groupService.getGroupIdSelectedByUser();
   }

  ngOnInit(): void {
      this.groupService.fetchGroupDashboardData(this.groupIdSelected).then(() => {
        this.isLoadingData = false;
      });
  }

  // Temporary, will change with Observable
  refreshMyTickets() {
    this.myTicketsComponent.getMyTickets();
    this.allTicketscomponent.getTickets();
  }

}
