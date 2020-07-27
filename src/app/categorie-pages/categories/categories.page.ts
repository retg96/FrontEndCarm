import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories = [
    { name: "Tops", img: "assets/images/category-images/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/images/category-images/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/images/category-images/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/images/category-images/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/images/category-images/5.jpg", count: "2" },
    { name: "Watches", img: "assets/images/category-images/6.jpg", count: "2" },
  ];
  constructor(public menuCtrl: MenuController, public nav: NavController) {}
  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("search");
  }
}
