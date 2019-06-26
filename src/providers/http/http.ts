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
    return new Promise<any>(res => {
      this.storage.get('token').then((val) => {
        this.token = val;
        res(val);
      });
    });
  }

  /*Metodo para obtener la informacion de las companias */
  getCompanyInfo(){

    return this.authToken().then(res => {

      var url = 'https://apidev.alanajobs.com/secure-candidate/publication/company-index';

      let  _params = new HttpParams({
        fromObject : {
          'offset' : '1',
          'limit' : '5',
          'apply' : '0'
        }
      })

      let _options = {
        params: _params,
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token
        })
      };

      return new Promise((resolve, reject) =>{
        this.http.get(url, _options)
        .map(res => res )
        .subscribe( (data) => {
          resolve(data);
          
        })
      })
    });
  }


  /*Metodo para obtener las vacantes de una empresa en especifico */
  getVacant(){
    this.authToken().then(res => {

      var url = 'https://apidev.alanajobs.com/secure-candidate/publication/index';

      let  _params = new HttpParams({
        fromObject : {
          'offset' : '1',
          'limit' : '5',
          'apply' : '0'
        }
      })

      let _options = {
        params: _params,
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token,
            'company': '54'
        })
      };

        this.http.get(url, _options)
        .map(res => res )
        .subscribe( data => {
        console.log(data)
        })
    });
  }

  /*Metodo para obtener los datos del usuario - FALTA TRABAJARLO*/
  getUserInfo(){
    this.authToken().then(res => {

        let httpOptions = {
          headers: new HttpHeaders({
              'Authorization': 'Bearer ' + this.token
              })
        };

        var url = 'https://apidev.alanajobs.com/secure-candidate/candidate/show';

        this.http.get(url, httpOptions)
        .map(res => res )
        .subscribe( data => {
        console.log(data)
        })
    });
  }

}
