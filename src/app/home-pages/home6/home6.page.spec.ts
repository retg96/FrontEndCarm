import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Home6Page } from './home6.page';

describe('Home6Page', () => {
  let component: Home6Page;
  let fixture: ComponentFixture<Home6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Home6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
