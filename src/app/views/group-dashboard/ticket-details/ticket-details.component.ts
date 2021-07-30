import { Component, Input, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { TicketData } from 'src/shared/definitions/common';
import { EntityTypeComment } from 'src/shared/enums/entity-type-comment';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent implements OnInit {
  @Input()
  ticket!: TicketData;

  @Input() flagDisplayTicketComment = false;

  ticketEntity = EntityTypeComment.TICKET;

  constructor() {}

  ngOnInit(): void {}
}
