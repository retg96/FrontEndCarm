import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  scrollTopButton = false;//for scroll down fab 


  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  goToSearchPage() {
    this.nav.navigateForward("search");
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
}
