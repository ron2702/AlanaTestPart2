import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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

  public submitAttempt: boolean = false;

  public referenceForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, 
    public http: HttpClient, public viewCtrl: ViewController, private alertCtrl : AlertController) {
    this.referenceForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }
  
  validateCode(){

    this.submitAttempt = true;

    this.testing = this.referenceForm.value.code;
    let codeReference = { code: this.referenceForm.value.code}

    var url = 'https://apidev.alanajobs.com/candidate/check-code';

    if(this.referenceForm.valid){
      return new Promise((resolve, reject) => {
        this.http.post(url,codeReference)
           .map(res => res )
           .subscribe((data) => {
             resolve(data);
              let codeForCompare = Object(data)["code"]
              if (codeForCompare == 200){
                this.viewCtrl.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Código valido',
                  subTitle: 'El código es correcto',
                  buttons: ['Cerrar']
                });
                alert.present();
               }
            },
            (err) =>{
              this.viewCtrl.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Código invalido',
                  subTitle: 'El código no es correcto',
                  buttons: ['Cerrar']
                });
                alert.present();
            });
       });
    }
    
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalReferencePage');
  }

}
