import { Component, Input } from '@angular/core';
import { Comment } from 'src/shared/definitions/common';

@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss'],
})
export class CommentEntryComponent {
  @Input()
  comment!: Comment;

  @Input()
  userPseudo = '';

  constructor() {}

  isCommentWroteByUser() {
    return this.userPseudo === this.comment.author
  }
}
