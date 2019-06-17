import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private name;
  private surname;
  private gender;
  private birthdate;
  private country;
  private codeArea;
  private telephone;
  private address;

  public profileForm: FormGroup;

  public submitAttempt: boolean = false;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.name = navParams.get('Fname');
    this.surname = navParams.get('Fsurname');
    this.gender = navParams.get('Fgender');
    this.birthdate = navParams.get('Fbirthdate');
    this.country = navParams.get('Fcountry');
    this.codeArea = navParams.get('FcodeArea');
    this.telephone = navParams.get('Ftelephone');
    this.address = navParams.get('Faddress');

    this.profileForm = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      passwordConfirm: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    });


  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  saveInfo(){
    this.submitAttempt = true;
    if(this.profileForm.valid){
      console.log(this.name, this.surname, this.gender, this.birthdate, this.country, this.codeArea, this.telephone, this.address,
        this.profileForm.value.email, this.profileForm.value.password, this.profileForm.value.passwordConfirm);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
