import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homecontribuidor',
  templateUrl: './homecontribuidor.component.html',
  styleUrls: ['./homecontribuidor.component.scss']
})
export class HomecontribuidorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()  img: string;

}
