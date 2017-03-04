import { Component, OnInit, Input } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-tittle-row',
  templateUrl: './tittle-row.component.html',
  styleUrls: ['./tittle-row.component.scss']
})
export class TittleRowComponent implements OnInit {

  @Input() question;
  @Input() profileModal: ProfileComponent;
  @Input() text;

  private user;

  constructor() { }

  ngOnInit() {
    this.user = this.question.user[0];
  }

  showProfile() {
    this.profileModal.user.name = this.user.name;
    this.profileModal.user.avatar = this.user.avatar;
    this.profileModal.showProfile();
  }
}
