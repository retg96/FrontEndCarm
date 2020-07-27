import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  public posts =
    { image: "assets/images/news/2.jpg", title: "Best Eid Dresses for Women", date: "2019-07-22T11:25:55", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to' }

  constructor(public nav:NavController, public menuCtrl: MenuController,
    public shared: SharedDataService, public config: ConfigService, translate: TranslateService) { }
  ngOnInit() {
  }

}
