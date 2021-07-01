import { Component, OnInit } from '@angular/core';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss'],
})
export class GeneralDashboardComponent implements OnInit {
  isLoadingData = true;

  constructor(
    private userService: UserService,
    private generalService: GeneralDashboardService
  ) {}

  ngOnInit(): void {
    this.generalService.fetchGeneralDashboardData().then((response) => {
      this.isLoadingData = false;
    });
  }
}
