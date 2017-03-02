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

  constructor() { }

  ngOnInit() {

  }

}
