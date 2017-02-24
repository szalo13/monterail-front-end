import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-row',
  templateUrl: './comment-row.component.html',
  styleUrls: ['./comment-row.component.scss']
})
export class CommentRowComponent implements OnInit {

  @Input() comment;

  constructor() { }

  ngOnInit() {
    console.log(this.comment.user);
  }

}
