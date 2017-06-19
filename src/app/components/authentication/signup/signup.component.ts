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

  registerForm: FormGroup;
  dni: string;

  constructor(
    private service: AuthoService,
    private router: Router,
    private fb: FormBuilder
  ){

  }

  ngOnInit() {
  this.registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    email: ['', [Validators.required, ]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    fecNac: ['', [Validators.required]],
    terms: ['', [Validators.required]],
  });
 }



 signUp(registerForm: FormGroup){
   const name = registerForm.controls.name.value;
   const lastname = registerForm.controls.lastname.value;
   const email = registerForm.controls.email.value;
   const password = registerForm.controls.password.value;
   const fecNac = registerForm.controls.fecNac.value;

  if (registerForm.dirty && registerForm.valid) {
    this.service.signUp(this.dni, name , lastname , email, password, fecNac).subscribe(
       response => {
         console.log(response);
         this.router.navigate(['/verify-account', email]);
       },
       error => console.log(error)
     );
  } else {
    registerForm.controls.name.markAsTouched();
    registerForm.controls.lastname.markAsTouched();
    registerForm.controls.email.markAsTouched();
    registerForm.controls.password.markAsTouched();
    registerForm.controls.fecNac.markAsTouched();
  }
 }

}
