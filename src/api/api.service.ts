import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GeneralDashboardData,
  GroupData,
  LoginForm,
  NewGroup,
  NewUser,
  UpdatedUser,
  UserData,
} from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiTicketingURL = 'http://localhost:8082/api/';

  constructor(private httpClient: HttpClient) {}

  public createUserRequest(newUser: NewUser) {
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

  public updateUserRequest(updatedUser: UpdatedUser) {
    return this.httpClient.put<UserData>(
      `${this.apiTicketingURL}/private/dashboard/updateUser`,
      updatedUser
    );
  }

  public getGeneralDashboardDataRequest(userId: number) {
    return this.httpClient.post<GeneralDashboardData>(
      `${this.apiTicketingURL}/private/dashboard`,
      userId
    );
  }

  public addGroup(newGroupData: NewGroup) {
    return this.httpClient.post<GroupData>(
      `${this.apiTicketingURL}/private/dashboard/addGroup`,
      newGroupData
    );
  }
}
