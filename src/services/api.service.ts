import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralDashboardData } from 'src/shared/definitions/general-dashboard-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiTicketingURL = 'http://localhost:8082/api/';

  constructor(private httpClient: HttpClient) { }

  public getGeneralDashboardData(userId: number){
    return this.httpClient.post<GeneralDashboardData>(`${this.apiTicketingURL}/private/dashboard`, userId);
  }
}
