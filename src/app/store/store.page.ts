import { Component, OnInit, Input } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  name = "Hannan";
  banner = "assets/images/2.jpg";
  gravatar = "assets/images/2.jpg";
  email = "hannan@gmail.com";
  rating = null;

  ngOnInit() {
  }
  @Input('type') type;//product data
  products = [
    { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }
  ]
  scrollSegments = "all"//scrollable segment

  constructor(public nav: NavController, public menuCtrl: MenuController,
  ) {
  }
  //for infinite scroll
  loadData(event) {
    setTimeout(() => {
      console.log(event);
      this.products.push({ img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
        { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false }
      );
      event.target.complete();
    }, 500);
  }
}
