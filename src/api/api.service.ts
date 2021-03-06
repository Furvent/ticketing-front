import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GeneralDashboardData,
  GroupDashboardData,
  GroupData,
  LoginForm,
  NewComment,
  NewGroup,
  NewTicket,
  NewUser,
  PublicUser,
  TicketData,
  UpdatedTicket,
  UpdatedUser,
  UserData,
  UserIdGroupIdForm,
} from 'src/shared/definitions/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiTicketingURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiTicketingURL = environment.apiUrl;
  }

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

  public addGroupRequest(newGroupData: NewGroup) {
    return this.httpClient.post<GroupData>(
      `${this.apiTicketingURL}/private/dashboard/addGroup`,
      newGroupData
    );
  }

  public getGroupDashboardDataRequest(groupId: number) {
    return this.httpClient.post<GroupDashboardData>(
      `${this.apiTicketingURL}/private/group`,
      groupId
    );
  }

  public addTicketRequest(newTicket: NewTicket) {
    return this.httpClient.post<TicketData>(
      `${this.apiTicketingURL}/private/group/add-ticket`,
      newTicket
    );
  }

  public updateTicketRequest(updatedTicket: UpdatedTicket) {
    return this.httpClient.post(
      `${this.apiTicketingURL}/private/group/update-ticket`,
      updatedTicket
    );
  }

  public addTicketCommentRequest(newComment: NewComment) {
    return this.httpClient.post(
      `${this.apiTicketingURL}/comment/createTicket`,
      newComment
    );
  }

  public addGroupCommentRequest(newComment: NewComment) {
    return this.httpClient.post(
      `${this.apiTicketingURL}/comment/createGroup`,
      newComment
    );
  }

  public getAllUsersAppRequest() {
    return this.httpClient.get<PublicUser[]>(`${this.apiTicketingURL}/private/user-group`);
  }

  public addUserOnGroupRequest(userIdGroupId: UserIdGroupIdForm) {
    return this.httpClient.post(
      `${this.apiTicketingURL}/private/user-group/add-user`,
      userIdGroupId
    )
  }
}
