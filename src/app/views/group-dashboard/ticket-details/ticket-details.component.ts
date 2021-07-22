import { Component, Input, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
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

  commentInputText = '';

  constructor(private groupService: GroupDashboardService, private userService: UserService) {}

  ngOnInit(): void {}

  sendcomment() {
    if (this.commentInputText !== "") {
      this.groupService.addCommentOnTicket({
        author: this.userService.getUserData().pseudo,
        text: this.commentInputText,
        entityId: this.ticket.id,
      }).then(() => {
        this.ticket.commentsToDisplay.push({
          author: this.userService.getUserData().pseudo,
          text: this.commentInputText,
          creationDate: new Date(Date.now()).toDateString(),
        })
      })
    }
  }
}
