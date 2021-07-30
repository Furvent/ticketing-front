import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralDashboardService } from 'src/services/general-dashboard/general-dashboard.service';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('heightGrow', [
        state('closed', style({
            height: 0,
        })),
        state('open', style({
          //height: 250
        })),
        transition('closed => open', animate(150)),
        transition('open => closed', animate(150)), 
    ]),
    
]
})
export class HeaderComponent implements OnInit {
  @Input()
  flagDisplayButtonBackToGeneralDashboard = false;

  //isShowProfileDiv = true;
  state = "closed";

  constructor(
    private userService: UserService,
    private gdService: GeneralDashboardService,
    private groupService: GroupDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getUserPseudo() {
    return this.userService.getUserData().pseudo;
  }

  backToGeneralDashboard() {
    this.groupService.resetData();
    this.router.navigate(['general-dashboard']);
  }

  logout() {
    this.groupService.resetData();
    this.gdService.resetData();
    this.userService.resetData();
    this.router.navigate(['connection']);
  }
  toggleDisplayProfileDiv(){
    //this.isShowProfileDiv = !this.isShowProfileDiv;
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }
}
