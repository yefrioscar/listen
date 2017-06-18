import { Component, Directive } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { User } from '../../../models/user.model';
import { Router, NavigationExtras } from '@angular/router';
import { AbstractControl,FormArray, FormControl, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

    userForm: FormGroup;
    dni: string;
    terms:  boolean;
    email: string;
    password: string;
    lastname: string;
    name: string;
    fecNac: string;

  
  
  constructor(
    private service: AuthoService,
    private router: Router
  ){

  }
  
  signUp(){
    this.service.signUp(this.dni,this.name,this.lastname,this.email,this.password,this.fecNac).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/home'])
      },
      error => console.log(error)
    )
  }

  clicked(userForm: FormGroup){
    if(userForm.dirty && userForm.valid){
      console.log('Entro y mando, validado los datos y se registro');
    } else{
      console.log('Error 4head');
      //Aqui haria la accion de mandar el error exacto
      //Pero como es validacion del template tendria que obtener los valores con formControl
      //Pero no se puede usar eso cuando usas el [(ngModel)]... aunque todavia no lo pruebo, acabo de encontrar eso en internet
      //Si fuera reactiveform, esto sería mas fácil pero no se puede usar directivas con [[ngModel]] :vvvv
    }
  }
  

}
