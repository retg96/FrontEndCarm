import { Component, OnInit } from '@angular/core';

import { LoginPage } from '../login/login.page'

import { NavController, AlertController, ModalController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  value = 0;
  orders = [{ subTotal: "100.00", discount: "0.00", total: "100.00" }]
  public products = [
    { image: "assets/category-images/top.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
  ];
  constructor(public shared: SharedDataService,
    public config: ConfigService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public alertController: AlertController,
    public modalCtrl: ModalController) {
    // console.log(shared.cartquantity);
  }
  ngOnInit() {
  }
  addQuantity() {
    this.value++;
  }
  minusQuantity() {
    if (this.value > 0) {
      this.value--;
    }
  }
  openShopPage() {
    this.nav.navigateForward("products");
  }
  goToProductDetailPage() {
    this.nav.navigateForward("product-detail");
  }
  async isCoupon() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Invalide Coupon Code!',
      buttons: ['OK']
    });
    await alert.present();
  }
  goToAddress() {
    this.nav.navigateForward("shipping-address");
  }
}
