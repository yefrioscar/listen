import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    urlAPI = "http://localhost:3002/api";

    constructor(private http: Http){}


    signUp(dni:number, email:string, password:string, apellido:string, nombre:string, fecha:Date): Promise<Any[]>{
        return this.http
            .post(`${this.urlAPI}/user`,{
                'email': email,
                'password': password,
                'dni': dni,
                'apellido': apellido,
                'genero': 'M',
                'tipoUsuario': 'Admin',
                'fecNac': fecha,
                'nombre': nombre
            })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError)
    }


    private extractData(res: Response) {
        let body = res.json();
        console.log("body", body);
        if (body.status == 200){
            return body.result;
        }
        else{
            return { };
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