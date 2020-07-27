import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// For Static Theme Apply
const themes = {
  black: {
    primary: 'black',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
  }
};

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/images/starter/home.png", title: "Home Pages", icon: "home", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/images/starter/shop.png", title: "Shop Pages", icon: "cash", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/images/starter/category.png", title: "Category Pages", icon: "apps", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/images/starter/order.png", title: "Order Page", icon: "browsers", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." }  
  ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController, public theme: ThemeService, public splashscreen: SplashScreen) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    // For Local Storage And Color Scheme 
    this.theme.getTheme().then((result) => {
      let val = result;
      console.log(val);
      if (val == undefined) {
        console.log("check 1");
        this.theme.setTheme(themes['black'], 'black');
      }
    });
  }

  ionViewDidEnter() {
    this.splashscreen.hide();
    this.autoSlides.startAutoplay();
  }

  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      console.log(index);
      if (index == 4) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }

  goToHomeEcom() {
    this.navCtrl.navigateForward('/home');
  }
}
