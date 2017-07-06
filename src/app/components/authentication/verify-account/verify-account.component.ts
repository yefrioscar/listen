import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthoService } from '../../../services/autho.service';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html'
})
export class VerifyAccountComponent implements OnInit {
  email: string;
  confirmForm: FormGroup;
  value = 'XYZ';
  private param: any;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private service: AuthoService,
              private SlimLoadingBarService: SlimLoadingBarService) {
               }


  onKey(confirm: string){
  
    if (confirm.length == 6) {
      this.service.verifyAccount(this.email, confirm).subscribe(
        response => {
          console.log(response);
          let v = response.success;
          if(v == true) {
            this.router.navigate(['ingresar']);
          }
        },
        error  => console.log(error)
      );
    }  else {
      console.log('error');
    }
  }

  ngOnInit() {

    this.router.events.subscribe((event: any): void =>{
          this.navigationInterceptor(event);
        });


    this.confirmForm = this.fb.group({
      confirm: '',
    });

    this.param = this.route.params.subscribe(params => {
      if(params['email'] == null) {
        
      }
      this.email = params['email'];
    });
  }

  startLoading(){
    this.SlimLoadingBarService.start(() => {
      console.log('Loading complete')
    });
  }

  finishLoading(){
    this.SlimLoadingBarService.complete();
  }

  navigationInterceptor(event): void{
    if(event instanceof NavigationStart){
      this.startLoading();
    }
    if(event instanceof NavigationEnd){
      this.finishLoading();
    }
    if(event instanceof NavigationCancel){
      this.finishLoading();
    }
    if(event instanceof NavigationError){
      this.finishLoading();
    }
  }

}
