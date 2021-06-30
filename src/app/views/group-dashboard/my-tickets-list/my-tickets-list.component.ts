import { Component, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { TicketData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-my-tickets-list',
  templateUrl: './my-tickets-list.component.html',
  styleUrls: ['./my-tickets-list.component.scss'],
})
export class MyTicketsListComponent implements OnInit {
  userId: number;
  myTicketsList: TicketData[];
  constructor(
    private userService: UserService,
    private groupService: GroupDashboardService
  ) {
    this.userId = this.userService.getUserData().id;
    this.myTicketsList = [];
  }

  ngOnInit(): void {
    this.getMyTickets();
  }

  getMyTickets() {
    this.myTicketsList = this.groupService.getAllTicketsWithUserId(this.userId);
  }
}
