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

  openModal(){
    let modal = this.modalCtrl.create(ModalReferencePage, null,  {cssClass: "select-modal" });

    modal.present();
  }

  personalDataPage(){
    this.navCtrl.push(PersonalDataPage);
  }

}
