import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AuthoService } from '../../../services/autho.service';
import { Router, NavigationExtras } from '@angular/router';
import { Idea } from '../../../models/idea.model';
import { User } from '../../../models/user.model';
import { IdeasService } from '../../../services/ideas.service';


@Component({
  selector: 'idea-item',
  templateUrl: './idea-item.component.html'
})
export class IdeaItemComponent implements OnInit {

  show = false;
  actived = 'actived';
  visible = false;



  like = false;
  likeNoti = '';
  visibleNoti = false;
  email: string;

  UsuariosPorIdea: User[] = [];

  constructor(private serviceIdeas: IdeasService){}

  @Input()  idea: Idea;

  ngOnInit() {
    console.log(this.idea);
  }

  toggle() {
    this.visible = !this.visible;
    this.actived = this.visible ? 'actived' : '';
  }

  getUserXIdea() {
    this.serviceIdeas.getUserXIdea().subscribe(
        response => {
          console.log(response);
          this.UsuariosPorIdea = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  toogleLike() {
    this.like = !this.like;
  }

  follow() {
    this.serviceIdeas.followUser(this.email).subscribe(
      response => {
        
      },
      error => {

      }

    )
  }
}
