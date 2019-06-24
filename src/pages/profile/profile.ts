import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
     private alertCtrl : AlertController) {

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

      let alert = this.alertCtrl.create({
        title: 'Informacion recibida',
        subTitle: 'Nombre: ' + this.name + '\n' + 'Apellido: ' + this.surname + '\n' + 'Sexo: ' + this.gender
                  + '\n' + 'Fecha de Nacimiento: ' + this.birthdate + '\n' + 'País: ' + this.country
                  + '\n' + 'Código de Area y Teléfono: ' + this.codeArea + '-' + this.telephone
                  + '\n' + 'Correo: ' + this.profileForm.value.email
                  + '\n' + 'Contraseña: ' + this.profileForm.value.password, 
        buttons: ['Cerrar']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
