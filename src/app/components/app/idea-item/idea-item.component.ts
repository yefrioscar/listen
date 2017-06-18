import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';


@Component({
  selector: 'idea-item',
  templateUrl: './idea-item.component.html'
})
export class IdeaItemComponent implements OnInit {
  like:boolean = true;


  @Input()  idea: Idea;

  ngOnInit() {
    console.log(this.idea);
  }
  
}
