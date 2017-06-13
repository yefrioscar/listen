import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  ticket:any;
  errorMessage:string;

  constructor(
    private service: UserService
  ){}
  

  signUp(){
    
  }

}
