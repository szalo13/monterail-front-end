import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-comment-row',
  templateUrl: './comment-row.component.html',
  styleUrls: ['./comment-row.component.scss']
})
export class CommentRowComponent implements OnInit {

  @Input() comment;
  @Input() profileModal: ProfileComponent;

  private user;

  constructor() { }

  showProfile() {
    this.profileModal.user.avatar = this.user.avatar;
    this.profileModal.user.name = this.user.name;
    this.profileModal.showProfile();
  }

  ngOnInit() {
    this.user = this.comment.user[0];
  }

}
