import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { Comment, LoginForm } from 'src/shared/definitions/common';
import { EntityTypeComment } from 'src/shared/enums/entity-type-comment';
import { AllTicketsListComponent } from './all-tickets-list/all-tickets-list.component';
import { MyTicketsListComponent } from './my-tickets-list/my-tickets-list.component';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss'],
})
export class GroupDashboardComponent implements OnInit {
  @ViewChild(MyTicketsListComponent)
  private myTicketsComponent!: MyTicketsListComponent;

  @ViewChild(AllTicketsListComponent)
  private allTicketscomponent!: AllTicketsListComponent;

  // TODO: Remove all ref to groupId, and get it in service groupDashboard
  groupIdSelected: number;

  isLoadingData = true;

  private mockedUserLoginForm: LoginForm = {
    username: 'mimi',
    password: 'pwdMimi',
  };
  mockedGroupId = 1;

  constructor(
    private groupService: GroupDashboardService,
    private userService: UserService
  ) {
    this.groupIdSelected = groupService.getGroupIdSelectedByUser();
  }

  ngOnInit(): void {
    // this.groupService.fetchGroupDashboardData(this.groupIdSelected).then(() => {
    //   this.isLoadingData = false;
    // });
    this.mockedConnection();
  }

  mockedConnection() {
    this.groupService.setGroupIdSelectedByUser(1);
    this.userService.login(this.mockedUserLoginForm).then(() => {
      this.groupService.fetchGroupDashboardData(this.mockedGroupId).then(() => {
        this.isLoadingData = false;
      });
    });
  }

  // Temporary, will change with Observable
  refreshMyTickets() {
    this.myTicketsComponent.getMyTickets();
    this.allTicketscomponent.getTickets();
  }
}
