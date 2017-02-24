import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tittle-row',
  templateUrl: './tittle-row.component.html',
  styleUrls: ['./tittle-row.component.scss']
})
export class TittleRowComponent implements OnInit {

  @Input() user;
  @Input() tittle;
  
  constructor() { }

  ngOnInit() {
  }

}
