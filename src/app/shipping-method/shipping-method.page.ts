import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.page.html',
  styleUrls: ['./shipping-method.page.scss'],
})
export class ShippingMethodPage implements OnInit {
  shippingMethod = [{title:"Free Shipping", cost:"100"}];
  constructor(    public menuCtrl: MenuController,
    public nav:NavController) { }

  ngOnInit() {
  }
  proceedOrder(){
    this.nav.navigateForward("order");
  }
  goToBillingAddress(){
    this.nav.navigateForward("billing-address");

  }

}
