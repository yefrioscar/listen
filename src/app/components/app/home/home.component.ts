import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ideas: Idea[] = [];

  
  constructor(private service: AuthoService,
              private router: Router ) { }

  ngOnInit() {
    this.getIdeas();
  }   

  getIdeas(){
    this.service.getIdeas().subscribe(
        response => {
          this.ideas = response,
          console.log(response),
          console.log(this.ideas)
        },
        error => console.log(error)
      )
  }
  
  
}




