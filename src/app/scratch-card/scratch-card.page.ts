import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.page.html',
  styleUrls: ['./scratch-card.page.scss'],
})
export class ScratchCardPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    private modalCtrl: ModalController, public nav: NavController) { }
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  openProductsPage() {
    this.nav.navigateForward("products");
  }
}
