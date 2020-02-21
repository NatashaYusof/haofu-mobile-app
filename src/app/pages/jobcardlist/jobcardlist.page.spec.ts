import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcardlistPage } from './jobcardlist.page';

describe('JobcardlistPage', () => {
  let component: JobcardlistPage;
  let fixture: ComponentFixture<JobcardlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
