import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor() {
   }

  ngOnInit(): void {
  }

  onSelect(): void{
    console.log("this.username", this.username);
    console.log("this.password", this.password);
  }

}
