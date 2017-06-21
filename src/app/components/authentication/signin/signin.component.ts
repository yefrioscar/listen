import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private service: AuthoService,
              private router: Router ) { }

  ngOnInit() {
  }

  signIn(){
    this.service.signIn(this.email,this.password).subscribe(
      response => {
        this.token = response.token;
        console.log(response.data, response.token);
        
      this.router.navigate(['/Inicio'])
      },
      error => console.log(error)
    )
  }

}
