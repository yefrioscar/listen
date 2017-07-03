import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class IdeasService {

  urlAPI = 'http://localhost:3002/api';

  constructor(private http: Http) { }

  getIdeas() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.urlAPI}/ideasxusuario`, options)
      .map(response => {
        console.log(response);
        return this.extractData(response)
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  getUserXIdea() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.urlAPI}/contribuidoresxideas`, options)
      .map(response => {
        console.log(response);
        return this.extractData(response);
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log('body', body);
    if (body.status === 200) {
      return body.data;
    } else {
      return body.data;
    }
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}
