import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Home5Page } from './home5.page';

describe('Home5Page', () => {
  let component: Home5Page;
  let fixture: ComponentFixture<Home5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Home5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
