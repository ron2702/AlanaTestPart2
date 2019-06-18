import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ProfilePage} from '../profile/profile';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  private name;
  private surname;
  private gender;
  private birthdate;


  private Fname;
  private Fsurname;
  private Fgender;
  private Fbirthdate;
  private Fcountry;
  private FcodeArea;
  private Ftelephone;
  private Faddress;

  public contactForm: FormGroup;

  public submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.name = navParams.get('Fname');
    this.surname = navParams.get('Fsurname');
    this.gender = navParams.get('Fgender');
    this.birthdate = navParams.get('Fbirthdate');

    this.contactForm = formBuilder.group({
      country: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      codeArea: ['', Validators.compose([Validators.maxLength(8), Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      address: ['', Validators.compose([Validators.required])]
    });

  }

  profilePage(){

    this.submitAttempt = true;

    if(this.contactForm.valid){
      this.navCtrl.push(ProfilePage,
        {
          Fcountry : this.contactForm.value.country,
          FcodeArea : this.contactForm.value.codeArea,
          Ftelephone : this.contactForm.value.telephone,
          Faddress : this.contactForm.value.address,
          Fname : this.name,
          Fsurname : this.surname,
          Fgender : this.gender,
          Fbirthdate : this.birthdate
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
