import { Component } from '@angular/core';

import { Platform, NavController, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from './login/login.page';
import { LanguagePage } from './language/language.page';
import { CurrencyListPage } from './currency-list/currency-list.page';
import { ColorThemePage } from './color-theme/color-theme.page';
import { CustomThemeService } from './services/custom-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  structure: any = { lower: 33, upper: 60 };

  visibleHome = false;//for home expand
  public itemsHome: any = [];//home list
  visibleCategory = false;//for category expand
  public itemsCategory: any = [];//category list
  visibleShop = false;//for shop expand
  public itemsShop: any = [];//shop list
  //home list
  public home = [
    { name: "Home-1" },
    { name: "Home-2" },
    { name: "Home-3" },
    { name: "Home-4" },
    { name: "Home-5" },
    { name: "Home-6" },
    { name: "Home-7" },
    { name: "Home-8" },
    { name: "Home-9" },
    { name: "Home-10" },
  ];
  //category list
  public category = [
    { name: "Category-1" },
    { name: "Category-2" },
    { name: "Category-3" },
    { name: "Category-4" },
    { name: "Category-5" },
    { name: "Category-6" },
  ];
  //shop list
  public shop = [
    { name: "Newest" },
    { name: "On Sale" },
    { name: "Featured" },
  ];

  // For all pages
  appPages = [
    {
      name: 'My Wish List',
      icon: 'heart',
      url: '/wish-list'

    },
    {
      name: 'Edit Profile',
      icon: 'lock',
      url: '/my-account'

    },
    {
      name: 'Addresses',
      icon: 'home',
      url: 'addresses'
    },
    {
      name: 'My Orders',
      icon: 'cart',
      url: 'my-orders'
    },
    {
      name: 'Reward Points',
      icon: 'happy',
      url: '/reward-points'

    },
    {
      name: 'Scratch Card',
      icon: 'notifications',
      url: '/notifications'

    },
    {
      name: 'Contact Us',
      icon: 'call',
      url: '/contact-us'
    },
    {
      name: 'About Us',
      icon: 'information-circle',
      url: '/about-us'

    },
    {
      name: 'News',
      icon: 'paper',
      url: '/news'
    },
    {
      name: 'Intro',
      icon: 'logo-ionic',
      url: '/intro'
    },
    {
      name: 'Share',
      icon: 'share'
    },
    {
      name: 'Rate Us',
      icon: 'star-half'
    },
    {
      name: 'Settings',
      icon: 'settings',
      url: '/settings'

    }

  ]
  constructor(
    public menuCtrl: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private translate: TranslateService,
    private modalCtrl: ModalController,
    private service: CustomThemeService
  ) {
    this.initializeApp();
    this.menuCtrl.enable(false, 'Menu2');

    translate.setDefaultLang(localStorage.languageCode);
    //for home not expand by default
    this.itemsHome = [
      { expandedHelp: false },
    ];
    //for category not expand by default
    this.itemsCategory = [
      { expandedHelp: false },
    ];
    //for category not expand by default
    this.itemsShop = [
      { expandedHelp: false },
    ];
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    console.log("color of custom theme is " + this.data);
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
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
    });
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true, 'Menu1');
  //   this.menuCtrl.enable(false, 'Menu2');
  // }

  //for home expandable
  expandItemHome(item): void {
    this.visibleHome = !this.visibleHome;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsHome.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
          console.log("yes")
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for category expandable
  expandItemCategory(item): void {
    this.visibleCategory = !this.visibleCategory;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCategory.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for shop expandable
  expandItemShop(item): void {
    this.visibleShop = !this.visibleShop;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsShop.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  goToshop(i) {
    if (i == 0) {
      this.navCtrl.navigateForward('products');
    }
    else if (i == 1) {
      this.navCtrl.navigateForward('products');
    }
    else if (i == 2) {
      this.navCtrl.navigateForward('products');
    }
  }
  goToHome(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("home2");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("home3");
    }
    else if (i == 3) {
      this.navCtrl.navigateForward("home4");
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("home5");
    }
    else if (i == 5) {
      this.navCtrl.navigateForward("home6");
    }
    else if (i == 6) {
      this.navCtrl.navigateForward("home7");
    }
    else if (i == 7) {
      this.navCtrl.navigateForward("home8");
    }
    else if (i == 8) {
      this.navCtrl.navigateForward("home9");
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("home10");
    }
    else if (i == 10) {
      this.navCtrl.navigateForward("home10");
    }
  }
  goToCategory(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("categories");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("categories2");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("categories3");
    }
    else if (i == 3) {
      this.navCtrl.navigateForward("categories4");
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("categories5");
    }
    else if (i == 5) {
      this.navCtrl.navigateForward("categories6");
    }
  }
  //navigate ot login page
  async goToLogin() {
    let modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  async goToLanguage() {
    let modal = await this.modalCtrl.create({
      component: LanguagePage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  async goToCurrencyListPage() {
    let modal = await this.modalCtrl.create({
      component: CurrencyListPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  goToColorPage() {
    this.navCtrl.navigateForward("color-theme");
  }
}
