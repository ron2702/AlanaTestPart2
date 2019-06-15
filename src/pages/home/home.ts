import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PersonalDataPage } from '../personal-data/personal-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  personalDataPage(){
    this.navCtrl.push(PersonalDataPage);
  }

}
