import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoService } from '../../../services/autho.service';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html'
})
export class VerifyAccountComponent implements OnInit {
  email: string;
  confirmForm: FormGroup;
  value = 'XYZ';
  private param: any;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private service: AuthoService) { }


  onKey(confirm: string){
    
    if (confirm.length == 6) {
      this.service.verifyAccount(this.email, confirm).subscribe(
        response => {
          console.log(response);
          let v = response.success;
          if(v == true) {
            this.router.navigate(['ingresar']);
          }
        },
        error  => console.log(error)
      );
    }  else {
      console.log('error');
    }
  }

  ngOnInit() {
    this.confirmForm = this.fb.group({
      confirm: '',
    });

    this.param = this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }

}
