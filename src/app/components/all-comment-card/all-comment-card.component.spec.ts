/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllCommentCardComponent } from './all-comment-card.component';

describe('AllCommentCardComponent', () => {
  let component: AllCommentCardComponent;
  let fixture: ComponentFixture<AllCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
