import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss'],
})
export class BannerTwoComponent implements OnInit {

  //banner images
  slides=[
    "assets/images/banner_images/4.png",
    "assets/images/banner_images/5.png",
    "assets/images/banner_images/6.jpg"
  ];

  constructor() { }

  ngOnInit() {}

}
