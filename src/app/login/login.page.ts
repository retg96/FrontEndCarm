import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  signupView: boolean = false

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  doLogin()
  {
    this.authService.login(this.email, this.password).then( () =>{
      this.router.navigate(['/home']);
    }).catch(err => {
      alert('los datos son incorrectos o no existe el usuario');
    })
  }

  loginGoogle(){
    this.authService.loginWithGoogle().then( () =>{
      this.router.navigate(['/home']);
    }).catch(err => {
      alert('Algo salio mal, contacta a sporte');
    })
  }

  toggleSignUpView () {
    this.signupView = !this.signupView
  }
}
