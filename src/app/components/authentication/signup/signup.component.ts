import { Component, Directive, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { User } from '../../../models/user.model';
import { Router, NavigationExtras } from '@angular/router';
import { AbstractControl,FormArray, FormControl, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;
  dni: string;

  constructor(
    private service: AuthoService,
    private router: Router,
    private fb: FormBuilder
  ){

  }

  ngOnInit(){
  this.registerForm = this.fb.group({
    name:['',[Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
    lastname:['',[Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
    email:['',[Validators.required,]],
    password:['',[Validators.required, Validators.minLength(8)]],
    fecNac:['',[Validators.required]],
    terms:['',[Validators.required]],
  });
 }


/* -------- ESTA SERIA LA FORMA 1 -------------

 signUp(registerForm: FormGroup){
   let name = registerForm.controls.name.value;
   let lastname = registerForm.controls.lastname.value;
   let email = registerForm.controls.email.value;
   let password = registerForm.controls.password.value;
   let fecNac = registerForm.controls.fecNac.value;

  if(registerForm.dirty && registerForm.valid){
    this.service.signUp(this.dni,name,lastname,email,password,fecNac).subscribe(
       response => {
         console.log(response)
         this.router.navigate(['/home'])
       },
       error => console.log(error)
     )
     console.log("Entro y mando, valido y se registro");
  }
  else{
    console.log("Error");
    registerForm.controls.name.markAsTouched();
    registerForm.controls.lastname.markAsTouched();
    registerForm.controls.email.markAsTouched();
    registerForm.controls.password.markAsTouched();
    registerForm.controls.fecNac.markAsTouched();
  }
 }
 
 
 */

    // dni: string; ESTA SERIA LA FORMA 2
    name: string;
    lastname: string;
    email: string;
    password: string;
    fecNac: string;
    terms: boolean;

  signUp(registerForm: FormGroup){

  if(registerForm.dirty && registerForm.valid){
    this.service.signUp(this.dni,this.name,this.lastname,this.email,this.password,this.fecNac).subscribe(
       response => {
         console.log(response)
         this.router.navigate(['/home'])
       },
       error => console.log(error)
     )
     console.log("Entro y mando, valido y se registro");
  }
  else{
    console.log("Error");
    registerForm.controls.name.markAsTouched();
    registerForm.controls.lastname.markAsTouched();
    registerForm.controls.email.markAsTouched();
    registerForm.controls.password.markAsTouched();
    registerForm.controls.fecNac.markAsTouched();
  }
 }


}
