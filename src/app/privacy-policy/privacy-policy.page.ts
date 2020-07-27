import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';

import { ModalController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(
    public nav: NavController,
    public menuCtrl: MenuController,
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
