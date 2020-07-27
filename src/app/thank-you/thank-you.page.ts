import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public config: ConfigService, public shared: SharedDataService, public nav: NavController) { }
  goToProductPage() {
    this.nav.navigateForward("products");
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  goToOrderPage() {
    this.nav.navigateForward("my-orders");
  }
  goToSearchPage(){
    this.nav.navigateForward("search");

  }
  ngOnInit() {
  }
}
