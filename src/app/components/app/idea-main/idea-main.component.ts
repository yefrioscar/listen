import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { IdeasService } from '../../../services/ideas.service';
import { AuthoService } from '../../../services/autho.service';
import { User } from '../../../models/user.model';
import { ActivatedRoute, Router,NavigationExtras, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';


@Component({
  selector: 'idea-main',
  templateUrl: './idea-main.component.html'
})
export class IdeaMainComponent implements OnInit {
  showAddUser = false;
   active = '';
  visible = false;
  hideBackground = '';

  exposicion: string;
  efecto: string;
  beneficio: string;
  formulalegal: string;
  title: string;

  like = false;
  writeTitle = false;
  private param: any;
  id:string;
  users:User[];

  session: User;

  constructor(private route: ActivatedRoute,
              private socket: SocketService,
              private idea: IdeasService,
              private serviceAutho: AuthoService,
              private router: Router ) { }

  ngOnInit() {

    this.serviceAutho.getCurrentUser().subscribe(
      response => {
        console.log("home", response);
        this.session = response;
      },
      error => {

      }
    )

    // Obtenemos el id de la idea
    this.param = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    // Obtener todos los usuarios de la idea
    this.idea.getUserXIdea(this.id).subscribe(
      response => {
        this.users = response;
        console.log(response);
      },
      error => {

      }
    )

    this.socket.connectSocket();
    this.socket.addUsers();

/*
    this.socket.receiveConnections().subscribe(response => {
      console.log(`Hay ${response.numbers} conexiones activas`);
      // alert(`Hay ${response.numbers} conexiones activas`);
    });
*/

    this.socket.userJoin().subscribe(response => {
      console.log(response);
      console.log(response.username);
    });


    this.idea.getContentIdea(this.id).subscribe(
      response => {
        const s = document.getElementById('title');
        s.innerHTML = response.nombre;
        this.exposicion = response.motivos;
        console.log(response);
        console.log(this.exposicion);
        this.efecto = response.efectos;
        this.beneficio = response.beneficios;
        this.formulalegal = response.formulaLegal;
        const sa = document.getElementById('pendejo');
        sa.innerHTML = response.likes;
        
      },
      error => {
        console.log(error);
      }
    )
  }

  showAddUserClick(){
      this.showAddUser = !this.showAddUser;
      this.visible = !this.visible;
      this.active = this.visible ? 'active' : '';
      this.hideBackground = this.visible ? 'hideBackground' : '';
  }

  toogleLike() {
    this.like = !this.like;
    const sa = document.getElementById('pendejo');
    var s = Number(sa.innerHTML) + 1;
    console.log(s);
    sa.innerHTML = ''+s;
    if(!this.like) {
      var s = Number(sa.innerHTML) - 2;
      sa.innerHTML = String(s);
    }

    this.idea.likeIdeas(this.id).subscribe(
      response => {},
      error => {}
    )
  }

  onClick(event){

  const tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'));
  const panels = Array.prototype.slice.apply(document.querySelectorAll('.panels-item'));

  document.getElementById('tabs').addEventListener('click', e => {
    if (event.target.classList.contains('tabs-item')){
      const i = tabs.indexOf(event.target);
      tabs.map(tab => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      panels.map(panel => panel.classList.remove('active'));
      panels[i].classList.add('active');
    }
  });

}

    onTitleClick() {
      this.writeTitle = true;
      const s = document.getElementById('title');
      this.socket.sendTitle(s.innerHTML.trim());

    this.socket.receiveTitle().subscribe(response => {
      s.innerHTML = response;
    });
}


  onKeyExposicion() {
    this.socket.sendMessage(this.exposicion);
    this.socket.receiveMessages().subscribe(response => {
      this.exposicion = response;
    });
  }

  onKeyEfecto() {
    this.socket.sendMessage1(this.efecto);
    this.socket.receiveMessages1().subscribe(response => {
      this.efecto = response;
    });
  }

  onKeyBeneficio() {
    this.socket.sendMessage2(this.beneficio);
    this.socket.receiveMessages2().subscribe(response => {
      this.beneficio = response;
    });
  }

  onKeyFormula() {
    this.socket.sendMessage3(this.formulalegal);
    this.socket.receiveMessages3().subscribe(response => {
      this.formulalegal = response;
    });
  }

}
