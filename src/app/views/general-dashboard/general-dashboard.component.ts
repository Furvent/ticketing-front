import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss']
})
export class GeneralDashboardComponent implements OnInit {

  private mockedUserLoginForm: LoginForm = {
    username: "mimi",
    password: "pwdMimi",
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

}
