import { Component } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { User } from '../../../models/user.model';
import { Router,
         NavigationExtras } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {



    dni: string;
    terms:  boolean;
    email: string;
    password: string;
    lastname: string;
    name: string;
    fecNac: string;

  
  
  constructor(
    private service: AuthoService,
    private router: Router
  ){}
  
  signUp(){
    this.service.signUp(this.dni,this.name,this.lastname,this.email,this.password,this.fecNac).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/home'])
      },
      error => console.log(error)
    )
  }

}
