import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketData } from 'src/shared/definitions/common';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent implements OnInit {
  @Input() ticket: TicketData = {
    id: 1,
    title: 'qzdq',
    description: '<qqdqdqdzgskf<hqzhfd opqizdhq qdhioQzd',
    history: [
      {
        date: '20/01/2021',
        label: 'CREATED',
      },
      {
        date: '20/01/2021',
        label: 'ALLOCATED',
      },
    ],
    commentsToDisplay: [
      {
        author: 'qsdq',
        creationDate: '22/01/2021',
        text: 'HAHAHAHAHAHA',
      },
    ],
    usersOnTask: [
      {
        id: 1,
        pseudo: 'Bob Lennon',
      },
    ],
  };

  @Input() flagDisplayTicketComment = false;

  constructor(
    
  ) {
    
  }

  ngOnInit(): void {}

}
