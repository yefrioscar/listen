import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';


@Injectable()
export class AuthoService {

  urlAPI = "http://localhost:3002/api";

    constructor(private http: Http){}

    
    signUp(dni:string,name:string,lastname:string,email:string,password:string, fechanacimiento:string){
        return this.http
            .post(`${this.urlAPI}/user`,{
              'email': email,
              'password':password,
              'dni': dni,
              'apellido':lastname,
              'genero': 'M',
              'tipoUsuario': 'admin',
              'fecNac': fechanacimiento,
              'nombre': name
            })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    signIn(email:string,password:string){
        return this.http
            .post(`${this.urlAPI}/login`,{
              'email': email,
              'password': password
            })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    resetpassword(email:string){
        return this.http
            .post(`${this.urlAPI}/senResetPassword`,{
              'email': email
            })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    getIdeas(){
        return this.http
            .get(`${this.urlAPI}/idea`)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("body", body);
        if (body.status == 200){
            return body.result;
        }
        else{
            return body.result;
        }
    }
    private handleError(error: Response | any){
        let errMsg:string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else{
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
