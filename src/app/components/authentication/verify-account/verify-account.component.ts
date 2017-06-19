import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html'
})
export class VerifyAccountComponent implements OnInit {
  email: string;
  param:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.params.subscribe(params => {
      this.email = params['email'];
    })
  }

}
