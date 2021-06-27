import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { GeneralDashboardService } from 'src/services/general-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { LoginForm, UserData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-testing-services',
  templateUrl: './testing-services.component.html',
  styleUrls: ['./testing-services.component.scss'],
})
export class TestingServicesComponent implements OnInit {

  mockedLoginForm: LoginForm = {
    username: "mimi",
    password: "pwdMimi",
  }

  userData: UserData | null = null;

  constructor(
    private apiService: ApiService,
    private generalService: GeneralDashboardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.login(this.mockedLoginForm).then(response => {
      console.log("this.userService.getUserData()", this.userService.getUserData())
      this.userData = this.userService.getUserData();
    }).catch(error => {
      console.error("Error is : ", error);
    })
  }
}
