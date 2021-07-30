import { Component, Input, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { Comment } from 'src/shared/definitions/common';
import { EntityTypeComment } from 'src/shared/enums/entity-type-comment';

@Component({
  selector: 'app-add-comment-input',
  templateUrl: './add-comment-input.component.html',
  styleUrls: ['./add-comment-input.component.scss'],
})
export class AddCommentInputComponent implements OnInit {
  @Input()
  entityComments!: Comment[];
  @Input()
  entityId!: number;

  @Input()
  entityType!: EntityTypeComment;

  commentInputText = '';

  flagDisableSend = true;

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
        .addCommentOnEntity(
          {
            ...newComment,
            entityId: this.entityId,
          },
          this.entityType
        )
        .then(() => {
          this.entityComments.push({
            ...newComment,
            creationDate: new Date(Date.now()).toString(),
          });
          this.commentInputText = '';
        });
    }
  }

  onEnter() {
    this.flagDisableSend = this.commentInputText.trim() === '';
  }
}
