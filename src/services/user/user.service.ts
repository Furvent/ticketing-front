import { Injectable } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { LoginForm, UserData } from 'src/shared/definitions/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: UserData | null = null;

  constructor(private apiService: ApiService) {}

  login(loginForm: LoginForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.loginRequest(loginForm).subscribe(response => {
        this.userData = {...response};
        resolve(true);
      }, (error => {
        reject(error);
      }))

    })
  }

  getUserData() {
    return this.userData;
  }
}
