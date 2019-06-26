import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HttpProvider } from '../../providers/http/http';

import { VacantPage } from '../vacant/vacant';
import { UserProfilePage } from '../user-profile/user-profile';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  public companyInfos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
    public httpProvider: HttpProvider) {
      this.companyInfos = [];
  }

  goTo(idTest){
    this.navCtrl.push(VacantPage, { idTest: idTest });
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage);
  }

  logOut(){
    this.storage.remove('token');
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

    this.httpProvider.getCompanyInfo().then( data => {
      this.companyInfos.push(data);
    });
    
  }

}
