/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VotesInlineComponent } from './votes-inline.component';

describe('VotesInlineComponent', () => {
  let component: VotesInlineComponent;
  let fixture: ComponentFixture<VotesInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
