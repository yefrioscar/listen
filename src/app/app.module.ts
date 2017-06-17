import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeaderComponent } from './components/app/header/header.component';
import { IdeaItemComponent } from './components/app/idea-item/idea-item.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';

const appRoutes: Routes = [
  {path:'', component: LandingComponent},
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path: 'dnisignup', component: DniSignupComponent},
  {path: 'resetpassword', component: ResetPasswordComponent}
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
     HomeComponent,
     HeaderComponent,
     IdeaItemComponent,
     LimitTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
