import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicUser, TicketData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-ticket-edition',
  templateUrl: './ticket-edition.component.html',
  styleUrls: ['./ticket-edition.component.scss'],
})
export class TicketEditionComponent implements OnInit {
  ticket: TicketData;
  isNewTicket: boolean;
  groupUserPseudoSelectOptions: String[];
  pseudosSelected: FormControl;

  constructor(
    private dialogRef: MatDialogRef<TicketEditionComponent>,
    @Inject(MAT_DIALOG_DATA) data: TicketEditionData
  ) {
    this.ticket = data.ticket;
    // To use multiple select with angular material, we must use directly a string, not a object
    this.groupUserPseudoSelectOptions = data.groupUsers.map((user) => user.pseudo);
    this.isNewTicket = data.isNewTicket;
    this.pseudosSelected = new FormControl();
  }

  ngOnInit(): void {
    this.pseudosSelected.setValue(
      this.ticket.usersOnTask.map((user) => user.pseudo)
    );
  }

  submit() {
    this.dialogRef.close(new TicketEditionData(this.ticket, this.isNewTicket));
  }

  cancel() {
    this.dialogRef.close();
  }

  test() {
    console.log('this.pseudosSelected', this.pseudosSelected.value);
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
  constructor(
    ticket: TicketData,
    isNewTicket: boolean,
    groupUsers: PublicUser[] = []
  ) {
    this.ticket = ticket;
    this.isNewTicket = isNewTicket;
    this.groupUsers = groupUsers;
  }
}
