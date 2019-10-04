import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcardPage } from './jobcard.page';

describe('JobcardPage', () => {
  let component: JobcardPage;
  let fixture: ComponentFixture<JobcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
