import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { IdeasService } from '../../../services/ideas.service';
import { SocketService } from '../../../services/socket.service';

import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ideas: Idea[] = [];
  constructor(private serviceAutho: AuthoService,
              private serviceIdeas: IdeasService,
              private router: Router,
              private socket: SocketService ) { }

  ngOnInit() {
    this.serviceAutho.getCurrentUser();
    this.getIdeas();


    this.socket.connectSocket();
    

    this.socket.receiveMessages().subscribe(response => {
      console.log(response);
		});
  }

  

  getIdeas() {
    this.socket.receiveMessages();
    this.serviceIdeas.getIdeas().subscribe(
        response => {
          console.log(response);
          this.ideas = response;
          this.socket.sendMessage(this.ideas[0]);
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




