/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TittleRowComponent } from './tittle-row.component';

describe('TittleRowComponent', () => {
  let component: TittleRowComponent;
  let fixture: ComponentFixture<TittleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TittleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TittleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
