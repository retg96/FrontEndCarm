import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {}

  async logOut()
  {
    await this.authService.logout();
    await this.router.navigate(['/home']);
 
  }

}
