import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // email: string;
  // password: string;
  // username: string;

  signupView: boolean = false

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  // get username(){
  //   return this.registrationForm.get('username');
  // }

  public errorMessages={
    email:[{type:'required', message:'Email is required'},
           {type: 'pattern', message:'Please enter a valid email address'}],
    password:[{type: 'required', message: 'Password is required'},
              {type: 'maxlength', message: 'Username cant be longer than 6 characters'}],
    // username:[{type: 'required', message: 'Username is required'},
    //           {type: 'maxlength', message: 'Username cant be longer than 30 characters'}]
  };

  registrationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    password: ['',[Validators.required, Validators.maxLength(6)]],
    // username: ['',[Validators.required, Validators.maxLength(30)]],
  });

  constructor(private authService: AuthService, public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public submit(){
    console.log(this.registrationForm.value);
  }


  doLogin()
  {
    this.authService.login(this.email.value, this.password.value).then( () =>{
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
