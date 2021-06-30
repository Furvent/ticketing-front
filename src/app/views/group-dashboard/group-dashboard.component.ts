import { Component, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss']
})
export class GroupDashboardComponent implements OnInit {

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

}
