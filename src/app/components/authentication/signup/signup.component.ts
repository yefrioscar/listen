import { Component, Directive, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { User } from '../../../models/user.model';
import { Router, NavigationEnd } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  previousUrl:string;
  constructor(
    private service: AuthoService,
    private router: Router,
    private fb: FormBuilder,
    private SlimLoadingBarService: SlimLoadingBarService
  ) {

    router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(e => {
            this.previousUrl = e['url'];
            console.log(this.previousUrl);
            console.log(e.toString());
        });

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(true) {
      
    } else {

    }

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
   const terms = registerForm.controls.terms.value;

  if (registerForm.dirty && registerForm.valid) {


      this.service.signUp(name , lastname , email, password, fecNac, terms).subscribe(
       response => {
         this.router.navigate(['/verificar-cuenta', email])
         console.log(response);
       },
       error => console.log(error));
  } else {

    registerForm.controls.name.markAsTouched();
    registerForm.controls.lastname.markAsTouched();
    registerForm.controls.email.markAsTouched();
    registerForm.controls.password.markAsTouched();
    registerForm.controls.fecNac.markAsTouched();

  }
 }
/*
setInterval(() => {
            this.router.navigate(['/verify-account', email]);
      }, 2500);
*/
    startLoading() {
        this.SlimLoadingBarService.start(() => {
            console.log("sdsd");
        });
    }

    completeProgress() {
        this.SlimLoadingBarService.complete();
    }

    resetProgress() {
        this.SlimLoadingBarService.reset();
    }

}
