import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from'@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { SocialComponent } from './components/login-social/social.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderSignupComponent } from './components/header-signup/header-signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderSigninComponent } from './components/header-signin/header-signin.component';
import { DniSignupComponent } from './components/dni-signup/dni-signup.component';


const appRoutes: Routes = [
  {path:'', component: LandingComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path: 'dni-signup', component: DniSignupComponent}
]

@NgModule({
  declarations: [
     AppComponent, 
     SignupComponent, 
     SocialComponent, 
     LandingComponent, 
     HeaderSignupComponent, 
     SigninComponent, HeaderSigninComponent,
     DniSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
