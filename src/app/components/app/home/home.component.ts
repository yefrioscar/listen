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
  idea: Idea;
  constructor(private service: AuthoService,
              private router: Router ) { }

  ngOnInit() {
    this.getIdeas();
  }


  getIdeas() {
    this.service.getIdeas().subscribe(
        response => {
          this.idea = response,
          this.ObjectToArray(this.ideas,this.idea)
        },
        error => console.log(error)
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




