import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class AuthoService {

  urlAPI = 'http://174.138.49.237:3002/api/';
  res: Response;

    constructor(private http: Http, private router: Router){}

    signUp(name: string, lastname: string, email: string, password: string,
    fechanacimiento: string, terms: boolean) {
        return this.http
            .post(`${this.urlAPI}/user`, {
              'nombre': name,
              'apellido': lastname,
              'correo': email,
              'contrasena': password,
              'fecha_nacimiento': fechanacimiento,
              'condicion': terms
            })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    signIn(email: string, password: string) {
        return this.http
            .post(`${this.urlAPI}/login`, {
              'email': email,
              'password': password
            })
            .map(response => {
                this.res = this.extractData(response);
                localStorage.setItem('token', this.extractData(response).token );
                return this.res;
            })
            .catch(error => this.handleError(error));
    }

    

    getCurrentUser() {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Authorization': token});
        const options = new RequestOptions({ headers: headers });
        console.log(token);

        return this.http
            .post(`${this.urlAPI}/obtenerUsuarioxToken`, {}, options)
            .map(response => {
                const user = this.extractData(response).data;
                localStorage.setItem('nombre', `${user.name} ${user.apellido}` );
                localStorage.setItem('correo', user.correo );
                localStorage.setItem('foto', user.foto );
                localStorage.setItem('username', user.username );
                return this.extractData1(response);
            })
            .catch(error => this.handleError(error));
  }
   private extractData1(res: Response) {
    const body = res.json();
    console.log('body', body);
    if (body.status === 200) {
      return body.data;
        } else {
        return body.data;
        }
    }

    resetpassword(email: string) {
        return this.http
            .post(`${this.urlAPI}/senResetPassword`, {
              'email': email
            })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    verifyAccount(email: string, code: string) {
        return this.http
            .post(`${this.urlAPI}/verificarEmail`, {
                'codigoVerificacion': code,
                'email': email
            })
            .map(response => this.extractData(response))
            .catch(error =>  this.handleError(error));
    }

    private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleError(error: Response | any){
        let errMsg: string;
        if(error instanceof Response) {
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
