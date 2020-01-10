import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvTab1Page } from './sv-tab1.page';

describe('SvTab1Page', () => {
  let component: SvTab1Page;
  let fixture: ComponentFixture<SvTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvTab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
