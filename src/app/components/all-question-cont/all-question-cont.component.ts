import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-question-cont',
  templateUrl: './all-question-cont.component.html',
  styleUrls: ['./all-question-cont.component.scss']
})
export class AllQuestionContComponent implements OnInit {

  @Input() question;

  constructor() { }

  ngOnInit() {

  }

}
