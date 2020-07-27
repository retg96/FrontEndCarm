import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorThemePage } from './color-theme.page';

describe('ColorThemePage', () => {
  let component: ColorThemePage;
  let fixture: ComponentFixture<ColorThemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorThemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
