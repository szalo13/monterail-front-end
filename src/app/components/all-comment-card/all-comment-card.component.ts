import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-comment-card',
  templateUrl: './all-comment-card.component.html',
  styleUrls: ['./all-comment-card.component.scss']
})
export class AllCommentCardComponent implements OnInit {

  @Input() type;
  @Input() user;
  @Input() question;
  @Input() activities;

  private _mobileCommentsLength = 1;
  private _tabletCommentsLength = 3;
  private _desktopCommentsLength = 4;
  private mobileActivities;
  private tabletActivities;
  private desktopActivities;
  private avatar;

  constructor() { }

  ngOnInit() {
    if (this.activities) {
        this.desktopActivities = this.activities - this._desktopCommentsLength;
        this.mobileActivities = this.activities - this._mobileCommentsLength;
        this.tabletActivities = this.activities - this._tabletCommentsLength;
    }

    if(this.user){
      this.avatar = this.user.avatar;
    }
  }

}
