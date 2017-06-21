import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { IdeasService } from '../../../services/ideas.service';
import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ideas: Idea[] = [];
  idea: Idea;
  constructor(private serviceAutho: AuthoService,
              private serviceIdeas: IdeasService,
              private router: Router ) { }

  ngOnInit() {
    this.getIdeas();
  }


  getIdeas() {
    this.serviceIdeas.getIdeas().subscribe(
        response => {
          console.log(response);
          this.ideas = response
        },
        error => {
          console.log(error),
          this.ideas = error
        }
      );
  }

  ObjectToArray(array: Idea[], object: Idea) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        array.push(object[key]);
      }
    }
  }
}




