import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-join-square',
  templateUrl: './profile-join-square.component.html',
  styleUrls: ['./profile-join-square.component.scss']
})
export class ProfileJoinSquareComponent implements OnInit {

  @Input() name;
  @Input() img;

  constructor() { }

  ngOnInit() {
  }

}
