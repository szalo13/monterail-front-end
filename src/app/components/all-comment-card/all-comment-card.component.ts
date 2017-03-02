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
  
  private avatar;

  constructor() { }

  ngOnInit() {
    if(this.user){
      this.avatar = this.user.avatar;
    }
  }

}
