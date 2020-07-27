import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  reviews = [{ name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" },
  { name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" }];
  constructor(public nav: NavController, public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }
}
