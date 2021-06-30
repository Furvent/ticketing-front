import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { NewTicket, TicketData } from 'src/shared/definitions/common';
import {
  TicketAfterEditionData,
  TicketEditionComponent,
  TicketEditionData,
} from '../ticket-edition/ticket-edition.component';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.component.html',
  styleUrls: ['./admin-options.component.scss'],
})
export class AdminOptionsComponent implements OnInit {

  @Output() refresh = new EventEmitter();

  constructor(
    private groupService: GroupDashboardService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openNewTicketCreationModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; // To put autocus on first input field
    const ticketData: TicketData = {
      id: 0,
      title: '',
      description: '',
      history: [],
      usersOnTask: [],
      commentsToDisplay: [],
    };
    dialogConfig.data = new TicketEditionData(
      ticketData,
      true,
      this.groupService.getGroupId(),
      this.groupService.getAllGroupUsers()
    );
    const dialogRef = this.dialog.open(TicketEditionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data: TicketAfterEditionData) => {
      if (data !== undefined && data.newTicket) {
        this.createTicket(data.newTicket);
      }
    });
  }

  createTicket(newTicket: NewTicket) {
    this.groupService.addTicket(newTicket).then(() => {
      this.groupService.fetchGroupDashboardData(this.groupService.getGroupId()).then(() => {
        this.refresh.emit();
      })
    })
  }
}
