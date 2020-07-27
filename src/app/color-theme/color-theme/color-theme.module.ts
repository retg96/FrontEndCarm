import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorThemePageRoutingModule } from './color-theme-routing.module';

import { ColorThemePage } from './color-theme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorThemePageRoutingModule
  ],
  declarations: [ColorThemePage]
})
export class ColorThemePageModule {}
