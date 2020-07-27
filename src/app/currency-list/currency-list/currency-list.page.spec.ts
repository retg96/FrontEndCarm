import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrencyListPage } from './currency-list.page';

describe('CurrencyListPage', () => {
  let component: CurrencyListPage;
  let fixture: ComponentFixture<CurrencyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
