import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';
@Component({
  selector: 'app-item-contribuidor',
  templateUrl: './item-contribuidor.component.html',
  styleUrls: ['./item-contribuidor.component.scss']
})
export class ItemContribuidorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()  user: User;

  

}
