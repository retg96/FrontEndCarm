import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.page.html',
  styleUrls: ['./home5.page.scss'],
})
export class Home5Page implements OnInit {
 //for categories
 public items = [
  { name: "Tops", img: "assets/images/home-categories/1.jpg", count: "2" },
  { name: "Bottoms", img: "assets/images/home-categories/2.jpg", count: "3" },
  { name: "Shirts", img: "assets/images/home-categories/3.jpg", count: "2" },
  { name: "Winter Wear", img: "assets/images/home-categories/4.jpg", count: "2" },
  { name: "Shoes", img: "assets/images/home-categories/5.jpg",  count: "2" },
  { name: "Watches", img: "assets/images/home-categories/6.jpg", count: "2" },
];
  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
  }
  goToSearchPage(){
    this.nav.navigateForward("search");
  }
  goToCartPage(){
    this.nav.navigateForward("cart");
  }
  goToSubCategory(){
    this.nav.navigateForward("products");

  }
}
