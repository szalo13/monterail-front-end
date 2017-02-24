import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss'],
  providers: [ QuestionsService ]
})
export class SingleQuestionComponent implements OnInit {

  private questions;
  private question;

  constructor(
    questionsService: QuestionsService
  ) {
    this.questions = questionsService.getQuestions();
    this.question = (this.questions[1]);
  }


  ngOnInit() {
  }

}
