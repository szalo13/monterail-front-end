import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss'],
  providers: [ QuestionsService ]
})
export class AllQuestionsComponent implements OnInit {

  @ViewChild('profileModal') profileModal:ProfileComponent;

  private questions;
  private questionFilter: any = { tittle: '' };

  constructor(
    questionsService: QuestionsService
  ) {
    this.questions = questionsService.getQuestions();
  }

  showProfile() {
    this.profileModal.showProfile();
  }

  ngOnInit() {
  }

}
