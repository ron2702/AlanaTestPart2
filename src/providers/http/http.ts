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
  public _id: string;

  constructor(public http: HttpClient, private storage: Storage) {
    
  }

  /*
    * Método para checkear el usuario y obtener un token, una vez obtenido se procede a almacenarlo 
    * con IonicStorage
    * 
    * @ejemplo
    * 
    * checkLoginInfo(emailNotConfirmed, passwordNotConfirmed)
    * 
    * @param {any} emailNotConfirmed: Correo del usuario
    * @param {any} passwordNotConfirmed: Password del usuario
    * @returns 
*/
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

/*
  * Método para obtener la información de las compañías
  * 
  * @ejemplo
  * 
  * getCompanyInfo()
  * @returns promise
*/
  getCompanyInfo(){

    return this.authToken().then(res => {

      var url = 'https://apidev.alanajobs.com/secure-candidate/publication/company-index';

      let  _params = new HttpParams({
        fromObject : {
          'offset' : '0',
          'limit' : '10',
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

/*
  * Método para obtener las vacantes de una empresa en específico 
  * 
  * @ejemplo
  * 
  * getVacant()
  * @returns promise
*/
  getVacant(companyID: string){
    return this.authToken().then(res => {

      this._id = companyID;

      var url = 'https://apidev.alanajobs.com/secure-candidate/publication/index';

      let  _params = new HttpParams({
        fromObject : {
          'offset' : '0',
          'limit' : '10',
          'apply' : '0'
        }
      })

      let _options = {
        params: _params,
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.token,
            'company': this._id.toString()
        })
      };

      return new Promise ((resolve, reject) => {
        this.http.get(url, _options)
        .map(res => res )
        .subscribe( data => {
          resolve(data);

        })
      })
    });
  }

/*
  * Método para obtener los datos del usuario
  * 
  * @ejemplo
  * 
  * getVacant()
  * @returns promise
*/
  getUserInfo(){
    return this.authToken().then(res => {

        let httpOptions = {
          headers: new HttpHeaders({
              'Authorization': 'Bearer ' + this.token
              })
        };

        var url = 'https://apidev.alanajobs.com/secure-candidate/candidate/show';

        return new Promise ((resolve, reject ) => {
          this.http.get(url, httpOptions)
            .map(res => res )
            .subscribe( data => {
              resolve(data)
          
          })
        })
    });
  }

}
