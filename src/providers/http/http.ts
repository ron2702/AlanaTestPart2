import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpProvider {

  public token:string;
  public _limit:number;
  public _offset:number;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello HttpProvider Provider');
  }

  /*Metodo para checkear el usuario y obtener el token*/
  checkLoginInfo(emailNotConfirmed:any, passwordNotConfirmed: any) {
  
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
           this.storage.set('token', value);
          },
          (err) =>{
            this.storage.remove('token');
          });
     });
  }

  authToken = (): Promise<any> => {
    console.log('token function')
    return new Promise<any>(res => {
      this.storage.get('token').then((val) => {
        this.token = val;
        console.log(this.token);
        res(val);
      });
    });
  }

  getCompanyInfo(){

    this._limit = 1;
    this._offset = 10;

    this.authToken().then(res => {


      /*let  _params = new HttpParams({
        fromObject : {
          'offset' : '1',
          'limit' : '5',
          'apply' : '0'
        }
      })*/

      /*let _params2 = {
        'offset': 5,
        'limit': 1,
        'apply': 0};*/

        let httpOptions = {
        HttpParams: new HttpParams({
          fromObject : {
            'offset' : '1',
            'limit' : '5',
            'apply' : '0'
          }
        }),
        headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
        }),
        };

        var url = 'https://apidev.alanajobs.com/secure-candidate/publication/company-index';

        this.http.get(url,httpOptions)
        .map(res => res )
        .subscribe( data => {
        console.log(data)
        })
    });
  }

}
