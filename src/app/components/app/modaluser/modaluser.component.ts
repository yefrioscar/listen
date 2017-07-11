import { Component, Input, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'modaluser',
  templateUrl: './modaluser.component.html'
})
export class ModaluserComponent implements OnInit {

  @Input()  user: User;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }



}
