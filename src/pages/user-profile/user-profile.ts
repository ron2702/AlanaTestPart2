import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  public userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public httpProvider: HttpProvider) {
      this.userInfo = [];
  }

  ionViewDidLoad() {

    this.httpProvider.getUserInfo().then( data => {
      this.userInfo.push(data);

    });
    
  }

}
