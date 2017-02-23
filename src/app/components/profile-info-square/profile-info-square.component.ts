import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info-square',
  templateUrl: './profile-info-square.component.html',
  styleUrls: ['./profile-info-square.component.scss']
})
export class ProfileInfoSquareComponent implements OnInit {

  @Input() number;
  @Input() description;

  constructor() { }

  ngOnInit() {
  }

}
