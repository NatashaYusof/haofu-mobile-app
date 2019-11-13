import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedetailPage } from './timedetail.page';

describe('TimedetailPage', () => {
  let component: TimedetailPage;
  let fixture: ComponentFixture<TimedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
