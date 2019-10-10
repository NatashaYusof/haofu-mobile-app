import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtaskPage } from './childtask.page';

describe('ChildtaskPage', () => {
  let component: ChildtaskPage;
  let fixture: ComponentFixture<ChildtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
