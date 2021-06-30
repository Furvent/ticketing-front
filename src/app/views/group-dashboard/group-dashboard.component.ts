import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';
import { MyTicketsListComponent } from './my-tickets-list/my-tickets-list.component';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss']
})
export class GroupDashboardComponent implements OnInit {

  @ViewChild(MyTicketsListComponent)
  private myTicketsComponent!: MyTicketsListComponent;

  private mockedUserLoginForm: LoginForm = {
    username: 'mimi',
    password: 'pwdMimi',
  };

  mockedGroupId = 1;

  isLoadingData = true;

  constructor(private userService: UserService, private groupService: GroupDashboardService) { }

  ngOnInit(): void {
    this.userService.login(this.mockedUserLoginForm).then(() => {
      this.groupService.fetchGroupDashboardData(this.mockedGroupId).then(() => {
        this.isLoadingData = false;
      });
    });
  }

  // Temporary, will change with Observable
  refreshMyTickets() {
    this.myTicketsComponent.getMyTickets();
  }

}
