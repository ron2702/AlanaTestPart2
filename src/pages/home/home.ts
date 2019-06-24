import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PersonalDataPage } from '../personal-data/personal-data';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  loginPage(){
    this.navCtrl.push(LoginPage);
  }

}
