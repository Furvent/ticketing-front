import { Component, Input, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { Comment } from 'src/shared/definitions/common';

@Component({
  selector: 'app-add-comment-input',
  templateUrl: './add-comment-input.component.html',
  styleUrls: ['./add-comment-input.component.scss'],
})
export class AddCommentInputComponent implements OnInit {
  @Input()
  ticketComments!: Comment[];
  @Input()
  ticketId!: number;

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
          entityId: this.ticketId,
        })
        .then(() => {
          this.ticketComments.push({
            ...newComment,
            creationDate: new Date(Date.now()).toDateString(),
          });
          this.commentInputText = '';
        });
    }
  }
}
