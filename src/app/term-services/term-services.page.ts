import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-term-services',
  templateUrl: './term-services.page.html',
  styleUrls: ['./term-services.page.scss'],
})
export class TermServicesPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    public nav: NavController,
    public mdCtrl: ModalController,
    public config: ConfigService,
    translate: TranslateService, ) { }
  ngOnInit() {
  }
  // For Modal Dismiss
  dismiss() {
    this.mdCtrl.dismiss();
  }
}
