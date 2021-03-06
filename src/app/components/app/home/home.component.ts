import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { IdeasService } from '../../../services/ideas.service';
import { SocketService } from '../../../services/socket.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ideas: Idea[] = [];
  constructor(private serviceAutho: AuthoService,
              private serviceIdeas: IdeasService,
              private router: Router,
              private socket: SocketService) { }

  user: User;

  ngOnInit() {



    this.serviceAutho.getCurrentUser().subscribe(
      response => {
        console.log("home", response);
        this.user = response;
      },
      error => {

      }
    )

    

    this.getIdeas();
  }

  getIdeas() {
    this.socket.receiveMessages();
    this.serviceIdeas.getIdeas().subscribe(
        response => {
          this.ideas = response;
        },
        error => {
          console.log(error);
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




