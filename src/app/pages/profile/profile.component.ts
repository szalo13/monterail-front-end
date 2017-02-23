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

  constructor() { }

  ngOnInit() {
  }

}
