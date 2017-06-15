import { Component,Input, Output, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';


@Component({
  selector: 'idea-item',
  templateUrl: './idea-item.component.html'
})
export class IdeaItemComponent implements OnInit {


    private ideas: Idea[] = [];
    
    constructor(private service: AuthoService,
              private router: Router ) { }


  ngOnInit() {
    
    this.service.getIdeas().subscribe(
        response => {
          this.ideas = response,
          console.log(this.ideas)
        } ,
        error => console.log(error)
      )

  }


  



}
