import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss'],
  providers: [ QuestionsService ]
})
export class SingleQuestionComponent implements OnInit {

  @ViewChild('profileModal') profileModal:ProfileComponent;

  private questions;
  private question;

  constructor(
    questionsService: QuestionsService
  ) {
    this.questions = questionsService.getQuestions();
    this.question = (this.questions[1]);
  }

  showProfile() {
    this.profileModal.showProfile();
  }

  ngOnInit() {
  }

}
