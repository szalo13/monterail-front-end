import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ QuestionsService ]
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileModal') modal;

  private questions;
  private user: User;

  private infoSquares = [
    { number: 15, description: 'description1' },
    { number: 13, description: 'description2' },
    { number: 15, description: 'description3' },
    { number: 15, description: 'description3' }
  ];

  private joinSquares = [
    { img: '../../../assets/img/avatars/128-5.jpg', name: 'description1' },
    { img: '../../../assets/img/avatars/128-5.jpg', name: 'description2' },
    { img: '../../../assets/img/avatars/128-5.jpg', name: 'description3' }
  ];

  constructor(
    questionsService: QuestionsService
  ) {
      this.questions = questionsService.getQuestions();
      this.user = this.questions[1].user;
  }

  showProfile() {
    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }

  ngOnInit() {
  }

}
