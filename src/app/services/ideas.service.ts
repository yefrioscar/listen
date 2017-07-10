import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class IdeasService {

  urlAPI = 'http://174.138.49.237:3002/api/';

  constructor(private http: Http) { }

  getIdeas() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.urlAPI}/idea`, options)
      .map(response => {
        console.log(response);
        return this.extractData(response);
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  getContentIdea(id: string){
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });


    return this.http
      .get(`${this.urlAPI}/obtenerIdea/${id}`, options)
      .map(response => {
        return this.extractData(response);
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  likeIdeas(idea: string){
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.urlAPI}/darlike`, {
        'idIdea': idea
      }, options)
      .map(response => {
        console.log(response);
        return this.extractData(response)
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  getUserXIdea(id: string) {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.urlAPI}/contribuidoresIdea/${id}`, options)
      .map(response => {
        return this.extractData(response);
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }


  search(id: string) {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });
    return this.http
      .post(`${this.urlAPI}/obtenerIdea/${id}`, {}, options)
      .map(response => this.extractData(response))
      .catch(error => this.handleError(error));
  }


  getIdea() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });


   return this.http
      .get(`${this.urlAPI}/idea`, options)
      .map(response => {
        console.log(response);
        return this.extractData(response);
      } )
      .catch(error  => Observable.throw(error.json().data) );
  }

  followUser(email: string) {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });
    console.log(email);
    return this.http
      .post(`${this.urlAPI}/seguirPersona`, {
              'usuarioAseguir': email
            }, options)
      .map(response => this.extractData(response))
      .catch(error => this.handleError(error));
  }

  createIdea() {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': token});
    const options = new RequestOptions({ headers: headers });
    console.log(token);
    return this.http
      .post(`${this.urlAPI}/idea`,{},options)
      .map(response => this.extractData(response))
      .catch(error => this.handleError(error));
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
