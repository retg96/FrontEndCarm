import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ModalController, MenuController, NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  language: any;

  currentLanguageCode = localStorage.languageCode;
  languageList = [
    { "name": "English", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
    { "name": "Arabic", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }]

  constructor(translate: TranslateService,
    public menuCtrl: MenuController,
    public navCtrl:NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController
  ) {

    this.languageList.forEach(val => {
      if (val.code == this.currentLanguageCode)
        this.language = val;
    });
  }
  updateLanguage() {

    console.log("Called");

    if (this.currentLanguageCode != this.language.code) {
      console.log("In called ");
      localStorage.languageCode = this.language.code;
      localStorage.languageDirection = this.language.direction;
      // this.shared.emptyCart();
      // this.shared.emptyRecentViewed();
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }

}
