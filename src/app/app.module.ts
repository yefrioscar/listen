import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from'@angular/router';

import { SocialComponent } from './components/authentication/login-social/social.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderSignupComponent } from './components/authentication/header-signup/header-signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { HeaderSigninComponent } from './components/authentication/header-signin/header-signin.component';
import { DniSignupComponent } from './components/authentication/dni-signup/dni-signup.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { AuthoService } from './services/autho.service';
import { NavBarComponent } from './components/app/nav-bar/nav-bar.component';
import { HomeComponent } from './components/app/home/home.component';

const appRoutes: Routes = [
  {path:'', component: LandingComponent},
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path: 'dni-signup', component: DniSignupComponent},
  {path: 'reset-password', component: ResetPasswordComponent}
]

@NgModule({
  declarations: [
     AppComponent, 
     SignupComponent, 
     SocialComponent, 
     LandingComponent, 
     HeaderSignupComponent, 
     SigninComponent, HeaderSigninComponent,
     DniSignupComponent,
     ResetPasswordComponent,
     NavBarComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
