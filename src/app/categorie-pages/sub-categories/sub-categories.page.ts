import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.page.html',
  styleUrls: ['./sub-categories.page.scss'],
})
export class SubCategoriesPage implements OnInit {
  public items = [
    { name: "Shirts", img: "assets/images/category-images/shirt.jpg", count: "12" },
    { name: "Top", img: "assets/images/category-images/top.jpg", count: "12" },
    { name: "Bottom", img: "assets/images/category-images/bottom.jpg", count: "12" },
    { name: "Winter", img: "assets/images/category-images/winter.jpg", count: "15" },
    { name: "Shoes", img: "assets/images/category-images/shoes.jpg",  count: "12" },
    { name: "Watches", img: "assets/images/category-images/watches.jpg", count: "12" },
  
  ];
  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("search");
  }
}
