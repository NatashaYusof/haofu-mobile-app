import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrjctmanagementPage } from './prjctmanagement.page';

describe('PrjctmanagementPage', () => {
  let component: PrjctmanagementPage;
  let fixture: ComponentFixture<PrjctmanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjctmanagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrjctmanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
