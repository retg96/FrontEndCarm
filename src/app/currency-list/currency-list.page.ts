import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.page.html',
  styleUrls: ['./currency-list.page.scss'],
})
export class CurrencyListPage implements OnInit {
  languageList = [
    { "name": "Pound", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
    { "name": "Riyal", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }]

  constructor(public menuCtrl: MenuController, public nav: NavController, public modalCtrl: ModalController) { }
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
