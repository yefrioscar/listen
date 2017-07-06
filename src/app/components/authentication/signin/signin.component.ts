import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private service: AuthoService,
              private router: Router,
              private SlimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
        this.service.getCurrentUser();
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

  signIn(){
    this.service.signIn(this.email,this.password).subscribe(
      response => {
        this.token = response.token;
        console.log(response.data, response.token);
        
      this.router.navigate(['/inicio'])
      },
      error => console.log(error)
    )
  }

}
