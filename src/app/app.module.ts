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
import { IdeaHeadComponent } from './components/app/idea-head/idea-head.component';
import { IdeaPropsComponent } from './components/app/idea-props/idea-props.component';
import { IdeaMainComponent } from './components/app/idea-main/idea-main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


/* pipes */
import { LimitTextPipe } from './pipes/limit-text.pipe';

/* services */
import { AuthoService } from './services/autho.service';
import { IdeasService } from './services/ideas.service';
import { SocketService } from './services/socket.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ModaluserComponent } from './components/app/modaluser/modaluser.component';


const appRoutes: Routes = [
  
  {path: '', component: LandingComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'registrarse', component: SignupComponent},
  {path: 'ingresar', component: SigninComponent},
  {path: 'verificar-cuenta/:email', component: VerifyAccountComponent},
  {path: 'reestablecer-contraseña', component: ResetPasswordComponent},
  {path: 'idea', component: IdeaMainComponent},
  {path: 'verificar-cuenta', redirectTo: '', pathMatch: 'full'},
  {path: 'reestablecer-contraseña', component: ResetPasswordComponent},
  {path: '404', component: NotFoundComponent},
  { path : '**' , redirectTo: '404', pathMatch: 'full' }
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
     LimitTextPipe,
     ModaluserComponent,
     IdeaHeadComponent,
     IdeaPropsComponent,
     IdeaMainComponent,
     NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [AuthoService, IdeasService, SocketService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
