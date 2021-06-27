import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { GeneralDashboardService } from 'src/services/general-dashboard.service';

@Component({
  selector: 'app-testing-services',
  templateUrl: './testing-services.component.html',
  styleUrls: ['./testing-services.component.scss'],
})
export class TestingServicesComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private generalService: GeneralDashboardService
  ) {}

  ngOnInit(): void {
    this.generalService.fetchData(2);
    setTimeout(() => {
      console.log('user data', this.generalService.getUserData());
    }, 1000);
  }
}
