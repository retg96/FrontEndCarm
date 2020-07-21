import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {HeaderComponent} from './header/header.component';
// import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    // HeaderComponent,
    // LoginComponent
    MenuComponent
  ],
  exports: [
      // HeaderComponent,
      // LoginComponent
      MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
