import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ContactPage} from '../contact/contact';

import {ModalReferencePage} from '../modal-reference/modal-reference';

/**
 * Generated class for the PersonalDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html',
})
export class PersonalDataPage {

  private Fname;
  private Fsurname;
  private Fgender;
  private Fbirthdate;

  public personalDataForm: FormGroup;

  public submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public modalCtrl: ModalController) {

    this.personalDataForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      surname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required]
    });

  }
  
  calculateYear(){
    var y = new Date().getFullYear().toString();
    var year = parseInt(y) - 18;
    return year;
  }

  contactPage(){
    this.submitAttempt = true;

    if(this.personalDataForm.valid){
      this.navCtrl.push(ContactPage, 
        {Fname : this.personalDataForm.value.name,
        Fsurname: this.personalDataForm.value.surname,
        Fgender: this.personalDataForm.value.gender,
        Fbirthdate: this.personalDataForm.value.birthDate
      });
    } 

  }

  ionViewDidLoad() {
    let modal = this.modalCtrl.create(ModalReferencePage, null,  {cssClass: "select-modal" });

    modal.present();
  }

}
