import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrollingFeaturedProductsComponent } from './scrolling-featured-products.component';

describe('ScrollingFeaturedProductsComponent', () => {
  let component: ScrollingFeaturedProductsComponent;
  let fixture: ComponentFixture<ScrollingFeaturedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingFeaturedProductsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollingFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
