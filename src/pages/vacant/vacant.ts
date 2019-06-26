import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';

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

  public vacantInfo: any;

  public idTest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public httpProvider: HttpProvider) {
    this.vacantInfo = [];
    this.idTest = this.navParams.get('idTest');
  }

  ionViewDidLoad() {

    var temp = this;

    this.httpProvider.getVacant(this.idTest).then( data => {
      this.vacantInfo.push(data);
    });

    setTimeout(function(){
      console.log(temp.vacantInfo)
    },2000 )

  }

}
