import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { TicketData, UpdatedTicket } from 'src/shared/definitions/common';
import { getAllStatus, TicketStatus } from 'src/shared/enums/ticket-status';
import {
  TicketAfterEditionData,
  TicketEditionComponent,
  TicketEditionData,
} from '../ticket-edition/ticket-edition.component';
import { cloneDeep } from 'lodash';
import { TicketDetailsData, TicketDetailsModalComponent } from '../ticket-details-modal/ticket-details-modal.component';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-all-tickets-list',
  templateUrl: './all-tickets-list.component.html',
  styleUrls: ['./all-tickets-list.component.scss'],
})
export class AllTicketsListComponent implements OnInit {
  groupIdSelected: number;
  userId: number;
  isUserGroupAdmin = false;
  flagShowUserTicket = false;
  allTickets: TicketData[] = [];

  openedTickets: TicketData[] = [];
  allocatedTickets: TicketData[] = [];
  doneTickets: TicketData[] = [];
  closedTickets: TicketData[] = [];

  ticketStatusLabels: string[];

  @Output() refresh = new EventEmitter();

  constructor(
    private userService: UserService,
    private groupService: GroupDashboardService,
    private dialog: MatDialog
  ) {
    this.userId = this.userService.getUserData().id;
    this.ticketStatusLabels = getAllStatus();
    this.groupIdSelected = this.groupService.getGroupIdSelectedByUser();
    this.isUserGroupAdmin = groupService.getIsUserAdmin();
  }

  ngOnInit(): void {
    this.getTicketsAndSortedThem();
    
  }

  getTicketsAndSortedThem() {
    this.allTickets = this.groupService.getAllTickets();
    this.sortTicketsByLastStatus();
  }

  /**
   * TODO: Refacto into switch
   */
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

  getTicketsByLastLabel(label: string): TicketData[] {
    switch (label) {
      case TicketStatus.OPENED:
        return this.openedTickets;
      case TicketStatus.ALLOCATED:
        return this.allocatedTickets;
      case TicketStatus.DONE:
        return this.doneTickets;
      case TicketStatus.CLOSED:
        return this.closedTickets;
      default:
        return [];
    }
  }

  openEditTicketDialog(ticket: TicketData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; // To put autofocus on first input field
    const tempTicket = cloneDeep(ticket);
    dialogConfig.data = new TicketEditionData(
      tempTicket,
      false,
      this.groupIdSelected,
      this.groupService.getAllGroupUsers()
    );
    const dialogRef = this.dialog.open(TicketEditionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data: TicketAfterEditionData) => {
      if (data !== undefined && data.updatedTicket) {
        // Call service to update ticket
        this.updateTicket(data.updatedTicket);
      }
    });
  }

  openTicketDetailsDialog(ticket: TicketData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new TicketDetailsData(ticket, true);
    this.dialog.open(TicketDetailsModalComponent, dialogConfig);
  }

  /**
   * Refresh is temporary, will changes when using Observable
   */
  updateTicket(updatedTicket: UpdatedTicket) {
    this.groupService.updateTicket(updatedTicket).then(() => {
      this.groupService
        .fetchGroupDashboardData(this.groupIdSelected)
        .then(() => {
          this.allTickets = this.groupService.getAllTickets();
          this.sortTicketsByLastStatus();
          this.refresh.emit();
        });
    });
  }

  toggleShowUserTicket() {
    if(this.flagShowUserTicket) {
      this.allTickets = this.groupService.getAllTicketsWithUserId(this.userId);
    } else {
      this.allTickets = this.groupService.getAllTickets();
    }
    this.sortTicketsByLastStatus();
  }
}
