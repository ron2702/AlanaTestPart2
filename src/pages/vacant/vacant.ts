import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VacantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacant',
  templateUrl: 'vacant.html',
})
export class VacantPage {

  public idTest: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idTest = this.navParams.get('idTest');
    console.log(this.idTest);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VacantPage');
  }

}
