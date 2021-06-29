import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import {
  LoginForm,
  NewUser,
  UpdatedUser,
  UserData,
} from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: UserData = {
    id: 0,
    pseudo: "",
    username: "",
    creationAccountDate: "",
  }

  constructor(private apiService: ApiService) {}

  async login(loginForm: LoginForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.loginRequest(loginForm).subscribe(
        (response) => {
          this.userData = { ...response };
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signIn(newUser: NewUser): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.createUserRequest(newUser).subscribe(
        (response) => {
          this.userData = { ...response };
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  updateUser(updatedUser: UpdatedUser): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.updateUserRequest(updatedUser).subscribe(
        (response) => {
          this.userData = { ...response };
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getUserData() {
    return this.userData;
  }
}
