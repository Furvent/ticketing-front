import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  flagDisplayButtonBackToGeneralDashboard = false;

  constructor(
    private userService: UserService,
    private gdService: GeneralDashboardService,
    private groupService: GroupDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getUserPseudo() {
    return this.userService.getUserData().pseudo;
  }

  backToGeneralDashboard() {
    this.groupService.resetData();
    this.router.navigate(['general-dashboard']);
  }

  logout() {
    this.groupService.resetData();
    this.gdService.resetData();
    this.userService.resetData();
    this.router.navigate(['connection']);
  }
}
