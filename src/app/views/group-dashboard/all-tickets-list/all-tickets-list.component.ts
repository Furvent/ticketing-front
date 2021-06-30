import { Component, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { TicketData } from 'src/shared/definitions/common';
import { getAllStatus, TicketStatus } from 'src/shared/enums/ticket-status';

@Component({
  selector: 'app-all-tickets-list',
  templateUrl: './all-tickets-list.component.html',
  styleUrls: ['./all-tickets-list.component.scss'],
})
export class AllTicketsListComponent implements OnInit {
  allTickets: TicketData[] = [];
  openedTickets: TicketData[] = [];
  allocatedTickets: TicketData[] = [];
  doneTickets: TicketData[] = [];
  closedTickets: TicketData[] = [];

  constructor(private groupService: GroupDashboardService) {}

  ngOnInit(): void {
    this.allTickets = this.groupService.getAllTickets();
    this.sortTicketsByLastStatus();
  }

  sortTicketsByLastStatus() {
    this.openedTickets = this.allTickets.filter(
      (ticket) => this.getLastTicketStatus(ticket) === TicketStatus.OPENED
    );
    this.allocatedTickets = this.allTickets.filter(
      (ticket) => this.getLastTicketStatus(ticket) === TicketStatus.ALLOCATED
    );
    this.doneTickets = this.allTickets.filter(
      (ticket) => this.getLastTicketStatus(ticket) === TicketStatus.DONE
    );
    this.closedTickets = this.allTickets.filter(
      (ticket) => this.getLastTicketStatus(ticket) === TicketStatus.CLOSED
    );
  }

  getLastTicketStatus(ticket: TicketData) {
    return ticket.history[ticket.history.length - 1].label;
  }
}
