import { Component, OnInit, Input } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-tittle-row',
  templateUrl: './tittle-row.component.html',
  styleUrls: ['./tittle-row.component.scss']
})
export class TittleRowComponent implements OnInit {

  @Input() user;
  @Input() tittle;
  @Input() profileModal: ProfileComponent;
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

  showProfile() {
    this.profileModal.user.name = this.user[0].name;
    this.profileModal.user.avatar = this.user[0].avatar;
    this.profileModal.showProfile();
  }
}
