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

  constructor(private service: AuthoService,
              private router: Router ) { }

  ngOnInit() {
  }

  signIn(){
    this.service.signIn(this.email,this.password).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/home'])
      },
      error => console.log(error)
    )
  }

}
