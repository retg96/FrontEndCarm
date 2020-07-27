import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sub-categories5',
  templateUrl: './sub-categories5.page.html',
  styleUrls: ['./sub-categories5.page.scss'],
})
export class SubCategories5Page implements OnInit {

  constructor(public menuCtrl: MenuController, public nav: NavController) { }


  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("search");
  }
}
