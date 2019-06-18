import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PersonalDataPage } from '../personal-data/personal-data';
import {ModalReferencePage} from '../modal-reference/modal-reference';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  personalDataPage(){
    this.navCtrl.push(PersonalDataPage);
  }

}
