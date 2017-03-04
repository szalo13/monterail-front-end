import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { ProfileComponent } from '../profile/profile.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss'],
  providers: [QuestionsService]
})
export class SingleQuestionComponent implements OnInit {

  @ViewChild('profileModal') profileModal: ProfileComponent;

  private questions;
  private question;
  private questionId: string;

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute
  ) {
    this.questions = questionsService.getQuestions();
  }

  showProfile() {
    this.profileModal.showProfile();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionId = params['id'];
    });

    this.question = this.questionsService.getQuestion(this.questionId);
  }

}
