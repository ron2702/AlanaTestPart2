import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [HttpProvider]
})
export class LoginPage {

  /*Declaracion de variables*/
  public loginForm: FormGroup;
  public loginEmail: any;
  public loginPass: any;


  /*Variables para el icono de mostrar password*/
  private passwordType: string = 'password';
  private passwordIcon: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
              public httpProvider: HttpProvider) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  /*Metodo para mostrar u ocultar el password en el modulo de inicio de Sesion*/
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  /*Metodo para enviar el email y password introducidos, esta peticion ira al provider http*/
  checkInfo(){
    var confirm = this.httpProvider.checkLoginInfo(this.loginEmail, this.loginPass);
    if (confirm){
      console.log('Confirmado')
    }
    else{
      console.log('No esta confirmado')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
