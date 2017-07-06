import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  email:string;

  constructor(private service: AuthoService,
              private router: Router,
              private SlimLoadingBarService: SlimLoadingBarService ) { }

  ngOnInit() {
    this.router.events.subscribe((event: any): void =>{
          this.navigationInterceptor(event);
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



  resetpassword(){
    this.service.resetpassword(this.email).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

}
