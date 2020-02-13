import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmartjobcardPage } from './smartjobcard.page';

describe('SmartjobcardPage', () => {
  let component: SmartjobcardPage;
  let fixture: ComponentFixture<SmartjobcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartjobcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartjobcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
