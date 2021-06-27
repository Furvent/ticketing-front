import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, UserData } from 'src/shared/definitions/common';
import { ApiService } from '../api.service';

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
