import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpProvider } from '../../providers/http/http';
import { DashboardPage } from '../dashboard/dashboard';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
              public httpProvider: HttpProvider, private alertCtrl : AlertController, private storage: Storage) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  /*Metodo para enviar el email y password introducidos, esta peticion ira al provider http*/
  checkInfo(){
    this.httpProvider.checkLoginInfo(this.loginEmail, this.loginPass);

    var temp = this;

    setTimeout(function(){

      temp.storage.get('token').then((val) => {
        if (val != null){
          temp.navCtrl.push(DashboardPage);
        }
        else{
          let alert = temp.alertCtrl.create({
            title: 'Usuario incorrecto',
            subTitle: 'Los datos suministrados no son correctos',
            buttons: ['Cerrar']
          });
          alert.present();
        }
        });
    }, 2000);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
