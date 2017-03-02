import { Component, OnInit, Input } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-all-question-cont',
  templateUrl: './all-question-cont.component.html',
  styleUrls: ['./all-question-cont.component.scss']
})
export class AllQuestionContComponent implements OnInit {

  @Input() question;
  @Input() profileModal:ProfileComponent;

  private commentsLength;
  private comments;
  private answered;

  constructor() {
    }

  ngOnInit() {
    this.comments = this.question.comments;
    this.commentsLength = this.question.comments.length;
    this.answered = this.question.answered[0];
  }

}
