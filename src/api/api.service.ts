import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralDashboardData, LoginForm, newUser, UserData } from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiTicketingURL = 'http://localhost:8082/api/';

  constructor(private httpClient: HttpClient) {}

  public getGeneralDashboardDataRequest(userId: number) {
    return this.httpClient.post<GeneralDashboardData>(
      `${this.apiTicketingURL}/private/dashboard`,
      userId
    );
  }

  public createUserRequest(newUser: newUser) {
    return this.httpClient.post<UserData>(
      `${this.apiTicketingURL}/public/login/create-user`,
      newUser
    );
  }

  public loginRequest(loginForm: LoginForm) {
    return this.httpClient.post<UserData>(
      `${this.apiTicketingURL}/public/login`,
      loginForm
    );
  }
}
