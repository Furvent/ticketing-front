import { Component, OnInit } from '@angular/core';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss'],
})
export class GeneralDashboardComponent implements OnInit {
  isLoadingData = true;

  constructor(
    private generalService: GeneralDashboardService
  ) {}

  ngOnInit(): void {
    this.generalService.fetchGeneralDashboardData().then(() => {
      this.isLoadingData = false;
    });
  }
}
