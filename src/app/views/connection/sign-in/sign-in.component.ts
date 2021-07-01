import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { LoginForm } from 'src/shared/definitions/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSelect(): void {
    console.log('this.username', this.username);
    console.log('this.password', this.password);
  }

  signIn() {
    const loginForm: LoginForm = {
      username: this.username,
      password: this.password,
    };
    this.userService.login(loginForm).then(
      () => {
        this.router.navigate(['general-dashboard']);
      }
    ).catch(error => {
      console.error("Error when signIn: ", error);
    });
  }
}
