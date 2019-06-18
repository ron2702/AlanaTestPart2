import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";
import "rxjs/Rx";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ModalReferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-reference',
  templateUrl: 'modal-reference.html',
})
export class ModalReferencePage {

  private testing;

  public referenceForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient) {
    this.referenceForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }
  
  validateCode(){

    this.testing = this.referenceForm.value.code;
    let datos = { code: this.referenceForm.value.code}

    var url = 'https://apidev.alanajobs.com/candidate/check-code';

    return new Promise((resolve, reject) => {
      this.http.post(url,datos)
         .subscribe((data) => {
           resolve(data);
           console.log('sucess');
          });
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalReferencePage');
  }

}
