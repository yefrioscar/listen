import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  email:string;

  constructor(private service: AuthoService,
              private router: Router ) { }

  ngOnInit() {
  }



  resetpassword(){
    this.service.resetpassword(this.email).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

}
