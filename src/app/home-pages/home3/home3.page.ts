import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CustomThemeService } from '../../services/custom-theme.service';
import { SharedDataService } from 'src/app/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/app/providers/config/config.service';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  scrollTopButton = false;//for scroll down fab 
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  // For Tab1
  public newestItems: any = [1, 1, 1, 1, 1, 1];
  public saleItems: any = [1, 1, 1, 1, 1, 1];
  public featuredItems: any = [1, 1, 1, 1, 1, 1];

  //For Recently Viewed Products
  public recentViewedProducts: any = [
    { img: "assets/images/item-images/5.jpg", name: "Denim Jacket", price: "12.23", dPrice: "21.00", fav: false, res: true },
    { img: "assets/images/item-images/11.jpg", name: "Flowing Blazer", price: "14.64", dPrice: "30.00", fav: false, res: true },
    { img: "assets/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "14.64", dPrice: "11.00", fav: false, res: true },
  ];
  //For Products Slider Per View
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  constructor(public menuCtrl: MenuController,
     public config: ConfigService,
     public shared: SharedDataService,
     public nav: NavController,
     private service: CustomThemeService ) {

    setTimeout(() => {
      this.newestItems = [
        { sale: true, featured: false, img: "assets/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true }, 
        { sale: true, featured: false, img: "assets/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true },       
       ];
       this.saleItems = [
        { sale: true, featured: false, img: "assets/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/images/item-images/8.jpg", name: "Printed Tshirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/images/item-images/19.jpg", name: "Strip Tshirt", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },        
       ];
       this.featuredItems = [
        { sale: true, featured: false, img: "assets/images/item-images/20.jpg", name: "Rose Patel Shirt", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/images/item-images/7.jpg", name: "Double Tank T Shirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },        
       ]
    }, 5000);
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    console.log("color of custom theme is "+this.data);
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
  }
  ngOnInit() {
  }
  goToSearchPage(){
    this.nav.navigateForward("search");
  }
  goToCartPage(){
    this.nav.navigateForward("cart");
  }
}
