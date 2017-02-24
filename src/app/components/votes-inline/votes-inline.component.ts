import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes-inline',
  templateUrl: './votes-inline.component.html',
  styleUrls: ['./votes-inline.component.scss']
})
export class VotesInlineComponent implements OnInit {

  @Input() votes;
  
  constructor() { }

  ngOnInit() {
  }

}
