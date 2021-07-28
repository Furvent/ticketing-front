import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/shared/definitions/common';

@Component({
  selector: 'app-group-comments',
  templateUrl: './group-comments.component.html',
  styleUrls: ['./group-comments.component.scss']
})
export class GroupCommentsComponent implements OnInit {
  comments: Comment[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
