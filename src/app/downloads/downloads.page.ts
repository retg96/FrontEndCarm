import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

  constructor(public nav: NavController, public menuCtrl: MenuController, private loadingController: LoadingController, public shared: SharedDataService,
    public config: ConfigService) { }

  async refreshPage() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
  }
  ngOnInit() {
  }

}
