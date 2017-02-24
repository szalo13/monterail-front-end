import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service'

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss'],
  providers: [ QuestionsService ]
})
export class AllQuestionsComponent implements OnInit {

  private questions;

  constructor(
    questionsService: QuestionsService
  ) {
    this.questions = questionsService.getQuestions();
  }

  ngOnInit() {
  }

}
