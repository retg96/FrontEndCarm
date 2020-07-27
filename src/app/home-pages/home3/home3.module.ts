import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

// import { Home3PageRoutingModule } from './home3-routing.module';
import { TranslateModule } from '@ngx-translate/core';
// import { ShareModule } from '../../../components/share/share.module'; 
import { Home3Page } from './home3.page';


const routes: Routes = [
  {
    path: '',
    component: Home3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    // ShareModule
  ],
  declarations: [Home3Page]
})
export class Home3PageModule {}
