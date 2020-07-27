import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.page.html',
  styleUrls: ['./reward-points.page.scss'],
})
export class RewardPointsPage implements OnInit {
  rewards = [{ type: "account-signup", points: "5", date: "Sep 1, 2019" }];
  rewardsTwo = [{ type: "order-placed", points: "11", date: "July 30, 2019" }]

  constructor(public menuCtrl: MenuController,
    public loadingController: LoadingController, public nav: NavController) { }

  ngOnInit() {
  }
  async refreshPage() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
  }
  openProductsPage() {
    this.nav.navigateForward("products");
  }
}
