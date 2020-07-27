import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  public posts = [
    { image: "assets/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
    { image: "assets/images/news/7.jpg", title: "Slingshot Softshell Jackets", date: "2019-06-22T 11:12:00", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
    { image: "assets/images/news/6.jpg", title: "Quick n Easy Shopping Festival 2019", date: "2019-05-22T 11:08:18", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
  ];
  constructor(public menuCtrl: MenuController,
    public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public nav: NavController) { }
  ngOnInit() {
  }
  showPostDetail() {
    this.nav.navigateForward("news-detail");
  }
  goToSearchPage() {
    this.nav.navigateForward("search");
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  getPosts(event) {
    setTimeout(() => {
      console.log(event);
      this.posts.push({
        image: "assets/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties'
      },
      );
    }, 500);
  }
}
