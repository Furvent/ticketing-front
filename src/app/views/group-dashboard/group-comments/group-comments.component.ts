import { Component, OnInit } from '@angular/core';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { Comment } from 'src/shared/definitions/common';
import { EntityTypeComment } from 'src/shared/enums/entity-type-comment';

@Component({
  selector: 'app-group-comments',
  templateUrl: './group-comments.component.html',
  styleUrls: ['./group-comments.component.scss'],
})
export class GroupCommentsComponent implements OnInit {
  groupComments: Comment[] = [];

  groupEntity = EntityTypeComment.GROUP;

  userPseudo: string;

  constructor(
    private groupService: GroupDashboardService,
    private userService: UserService
  ) {
    this.userPseudo = userService.getUserData().pseudo
  }

  ngOnInit(): void {
    this.loadGroupComments();
  }

  loadGroupComments() {
    this.groupComments = this.groupService.getGroupComments();
  }

  getGroupSelectedId() {
    return this.groupService.getGroupIdSelectedByUser();
  }
}
