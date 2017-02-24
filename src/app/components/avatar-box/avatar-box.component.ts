import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-box',
  templateUrl: './avatar-box.component.html',
  styleUrls: ['./avatar-box.component.scss']
})
export class AvatarBoxComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
