import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {

  // For Rating Star Icons
  ratingStars = [
    { value: '1', fill: 'star-outline' },
    { value: '2', fill: 'star-outline' },
    { value: '3', fill: 'star-outline' },
    { value: '4', fill: 'star-outline' },
    { value: '5', fill: 'star-outline' }
  ];


  formData = { name: '', email: '', description: '' };

  constructor(
    public menuCtrl: MenuController,
    public mdCtrl: ModalController,
    public config: ConfigService,
    public translate: TranslateService,
    public nav: NavController) { }
  ngOnInit() {
  }
  goToproductDetail() {
    this.nav.navigateForward("product-detail");
  }
}
