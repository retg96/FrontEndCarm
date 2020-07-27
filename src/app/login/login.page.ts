import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData = {
    username: '',
    password: ''
  };
  //Invalid username or password.
  errorMessage = 'Invalid username or password.';

  ngOnInit() { }
  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    translate: TranslateService
  ) {
  }
  /*function to move back to main menu*/
  dismiss() {
    this.modalCtrl.dismiss();
  }

  async loginwithFacebook() {
    const toast = await this.toastCtrl.create({
      message: 'Facebook login button Clicked',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      duration: 1000
    });
    toast.present();
  }
  async loginWithGoogle() {
    const toast = await this.toastCtrl.create({
      message: 'Google login button Clicked',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      duration: 1000
    });
    toast.present();
  }

  async goToSignUp() {
    let modal = await this.modalCtrl.create({
      component: SignUpPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  async goToForgot() {
    let modal = await this.modalCtrl.create({
      component: ForgotPasswordPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }

  // For Menu Controller
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'Menu2')
  }
}
