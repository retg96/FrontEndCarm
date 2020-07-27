import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorThemePage } from './color-theme.page';

const routes: Routes = [
  {
    path: '',
    component: ColorThemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorThemePageRoutingModule {}
