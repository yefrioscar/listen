import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

/* Components */
import { SocialComponent } from './components/authentication/login-social/social.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderSignupComponent } from './components/authentication/header-signup/header-signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { HeaderSigninComponent } from './components/authentication/header-signin/header-signin.component';
import { VerifyAccountComponent } from './components/authentication/verify-account/verify-account.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { NavBarComponent } from './components/app/nav-bar/nav-bar.component';
import { HomeComponent } from './components/app/home/home.component';
import { HeaderComponent } from './components/app/header/header.component';
import { IdeaItemComponent } from './components/app/idea-item/idea-item.component';


/* pipes */
import { LimitTextPipe } from './pipes/limit-text.pipe';

/* services */
import { AuthoService } from './services/autho.service';
import { IdeasService } from './services/ideas.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'Inicio', component: HomeComponent},
  {path: 'registrarse', component: SignupComponent},
  {path: 'ingresar', component: SigninComponent},
  {path: 'verificar-cuenta/:email', component: VerifyAccountComponent},
  {path: 'reestablecer-contraseña', component: ResetPasswordComponent}
];

@NgModule({
  declarations: [
     AppComponent,
     SignupComponent,
     SocialComponent,
     LandingComponent,
     HeaderSignupComponent,
     SigninComponent,
     HeaderSigninComponent,
     ResetPasswordComponent,
     NavBarComponent,
     HomeComponent,
     HeaderComponent,
     IdeaItemComponent,
     VerifyAccountComponent,
     LimitTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [AuthoService, IdeasService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
