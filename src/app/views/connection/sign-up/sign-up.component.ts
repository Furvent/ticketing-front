import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { NewUser } from 'src/shared/definitions/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';
  pseudo: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp(): void {
    const loginForm: NewUser = {
      username: this.username,
      password: this.password,
      pseudo: this.pseudo,
    };
    this.userService
      .signUp(loginForm)
      .then(() => {
        this.router.navigate(['general-dashboard']);
      })
      .catch((error) => {
        console.error('Error when signIn: ', error);
      });
  }
}
