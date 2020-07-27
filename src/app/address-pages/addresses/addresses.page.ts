import { Component, OnInit } from '@angular/core';


import { ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(public shared: SharedDataService,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public nav: NavController,
    public loadingController: LoadingController) {
    console.log(shared.cartquantity);
  }
  ngOnInit() {
  }

  async selectCountryPage(value) {
    console.log("ggg")
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage
    });
    return await modal.present();
  }

  async selectZonePage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage
    });
    return await modal.present();
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  async updateAddress() {
    const loadingElement = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loadingElement.present();
  }
}
