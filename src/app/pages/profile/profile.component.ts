import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
