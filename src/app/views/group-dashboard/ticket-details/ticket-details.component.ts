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
  @Input()
  ticket!: TicketData;

  @Input() flagDisplayTicketComment = false;

  commentInputText = '';

  constructor(
    private groupService: GroupDashboardService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  sendComment() {
    if (this.commentInputText !== '') {
      const newComment = {
        author: this.userService.getUserData().pseudo,
        text: this.commentInputText,
      };
      this.groupService
        .addCommentOnTicket({
          ...newComment,
          entityId: this.ticket.id,
        })
        .then(() => {
          this.ticket.commentsToDisplay.push({
            ...newComment,
            creationDate: new Date(Date.now()).toDateString(),
          });
          this.commentInputText = '';
        });
    }
  }
}
