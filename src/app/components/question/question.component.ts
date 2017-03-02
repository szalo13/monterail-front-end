import { Component, OnInit, Input } from '@angular/core';
import { ProfileComponent } from '../../pages/profile/profile.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question;
  @Input() profileModal: ProfileComponent;

  constructor() { }

  ngOnInit() {
  }

}
