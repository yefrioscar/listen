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
  

  }

  toggle() {


    // Obtener todos los usuarios de la idea
    this.serviceIdeas.getUserXIdea(this.idea.id).subscribe(
      response => {
        this.UsuariosPorIdea = response;
        console.log(response);
      },
      error => {

      }
    )

    this.visible = !this.visible;
    this.actived = this.visible ? 'actived' : '';
  }

  toogleLike() {

    this.like = !this.like;
    ++this.idea.likes;
    if(!this.like) {
      --this.idea.likes;
      --this.idea.likes;
    }

    this.serviceIdeas.likeIdeas(this.idea.id).subscribe(
      response => {
      },
      error => {

      }
    )
  }

  follow() {
    this.serviceIdeas.followUser(this.idea.creador.correo).subscribe(
      response => {
        
      },
      error => {

      }

    )
  }
}
