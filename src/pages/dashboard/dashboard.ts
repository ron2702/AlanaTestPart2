import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HttpProvider } from '../../providers/http/http';

import { VacantPage } from '../vacant/vacant';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public httpProvider: HttpProvider) {
  }

  goTo(idTest){
    this.navCtrl.push(VacantPage, { idTest: idTest });
  }

  ionViewDidLoad() {
    this.httpProvider.getCompanyInfo();
  }

}
