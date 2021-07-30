import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTicket, PublicUser, TicketData, UpdatedTicket } from 'src/shared/definitions/common';
import { TicketStatus } from 'src/shared/enums/ticket-status';

@Component({
  selector: 'app-ticket-edition',
  templateUrl: './ticket-edition.component.html',
  styleUrls: ['./ticket-edition.component.scss'],
})
export class TicketEditionComponent implements OnInit {
  data:TicketEditionData;
  ticket: TicketData;
  isNewTicket: boolean;
  groupUserPseudoSelectOptions: String[];
  pseudosSelected: FormControl;
  selectedStatus: string;
  selectableStatus: String[];

  constructor(
    private dialogRef: MatDialogRef<TicketEditionComponent>,
    @Inject(MAT_DIALOG_DATA) data: TicketEditionData
  ) {
    this.data = data;
    this.ticket = data.ticket;
    // To use multiple select with angular material, we must use directly a string, not a object
    this.groupUserPseudoSelectOptions = data.groupUsers.map((user) => user.pseudo);
    this.isNewTicket = data.isNewTicket;
    this.pseudosSelected = new FormControl();
    this.selectableStatus = [TicketStatus.DONE, TicketStatus.CLOSED];
    if (data.isNewTicket) {
      this.selectedStatus = "";
    } else {
      this.selectedStatus = this.getPreSelectedStatus();
    }
  }

  ngOnInit(): void {
    this.pseudosSelected.setValue(
      this.ticket.usersOnTask.map((user) => user.pseudo)
    );
  }

  submit() {
    if (this.isNewTicket) {
      const newTicket: NewTicket =  {
        title: this.ticket.title,
        description: this.ticket.description,
        groupId: this.data.groupId,
        usersOnTask: this.getSelectedUser(),
      }
      this.dialogRef.close(new TicketAfterEditionData(undefined, newTicket));
    } else {
      const updatedTicket: UpdatedTicket = {
        ticketId: this.ticket.id,
        newTitle: this.ticket.title,
        newDescription: this.ticket.description,
        newStatus: this.selectedStatus,
        usersOnTask: this.getSelectedUser(),
      }
      this.dialogRef.close(new TicketAfterEditionData(updatedTicket, undefined));
    }
  }

  goBack() {
    this.dialogRef.close();
  }

  test() {
    console.log('this.pseudosSelected', this.pseudosSelected.value);
    console.log("this.selectedStatus", this.selectedStatus);
  }

  // Todo : à améliorer il me semble
  getPreSelectedStatus() {
    const statusLabel = this.ticket.history[this.ticket.history.length - 1].label;
    return (statusLabel === TicketStatus.DONE || statusLabel === TicketStatus.CLOSED) ? statusLabel : "";
  }

  getSelectedUser() {
    return this.data.groupUsers.filter(user => {
      return this.pseudosSelected.value.find((pseudo: string) => user.pseudo === pseudo);
    })
  }
}

/**
 * Use to carry data between component calling dialog and ticket-edition component
 * @param ticket Mandatory. Ticket data
 * @param isNewTicket Mandatory. Use to configure ticket-edition component
 * @param groupUsers optionnal, empty list by default
 */
export class TicketEditionData {
  ticket: TicketData;
  isNewTicket: boolean;
  groupUsers: PublicUser[];
  groupId: number;
  constructor(
    ticket: TicketData,
    isNewTicket: boolean,
    groupId: number,
    groupUsers: PublicUser[] = [],
  ) {
    this.ticket = ticket;
    this.isNewTicket = isNewTicket;
    this.groupId = groupId;
    this.groupUsers = groupUsers;
  }
}
// Caca ça !
export class TicketAfterEditionData {
  updatedTicket: UpdatedTicket | undefined;
  newTicket: NewTicket | undefined;
  constructor(
    updatedTicket: UpdatedTicket | undefined,
    newTicket: NewTicket | undefined
  ) {
    this.updatedTicket = updatedTicket;
    this.newTicket = newTicket;
  }
}

