import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username: string = "";
  password: string = "";
  pseudo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(): void{
    console.log("this.username", this.username);
    console.log("this.password", this.password);
    console.log("this.pseudo", this.pseudo);
  }

}
