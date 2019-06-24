import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  public submitAttempt: boolean = false;

  public value: any;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello HttpProvider Provider');
  }

  checkLoginInfo(emailNotConfirmed:any, passwordNotConfirmed: any): boolean {
    
    let body = 'email=' + emailNotConfirmed + '&password=' + passwordNotConfirmed;
      
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
     })
    };
    var url = 'https://apidev.alanajobs.com/secure-candidate/login_check';

    new Promise((resolve, reject) => {
      this.http.post(url,body, httpOptions)
         .map(res => res )
         .subscribe((data) => {
           resolve(data);
           let keys = Object.keys(data);
           let value = keys.map(k => data[k])
           this.storage.set('mytoken', value);
          });
     });
     
     this.storage.get('mytoken').then((val) => {
      if (val != null){
        this.submitAttempt = true;
      }
      else{
        this.submitAttempt = false;
      }
    });

    return this.submitAttempt;
  }

}
