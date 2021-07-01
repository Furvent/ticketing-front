import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-ticket-details-modal',
  templateUrl: './ticket-details-modal.component.html',
  styleUrls: ['./ticket-details-modal.component.scss'],
})
export class TicketDetailsModalComponent implements OnInit {
  ticket: TicketData;
  flagDisplayTicketComment: boolean;

  constructor(
    private dialogRef: MatDialogRef<TicketDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: TicketDetailsData
  ) {
    this.ticket = data.ticket;
    this.flagDisplayTicketComment = data.flagDisplayComment;
  }

  ngOnInit(): void {}

  goBack(): void {
    this.dialogRef.close();
  }
}

export class TicketDetailsData {
  ticket: TicketData;
  flagDisplayComment: boolean;
  constructor(ticket: TicketData, displayComment: boolean) {
    this.ticket = ticket;
    this.flagDisplayComment = displayComment;
  }
}
