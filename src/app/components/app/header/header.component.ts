import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IdeasService } from '../../../services/ideas.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  show = false;
  active = '';
  visible = false;


  showNoti = false;
  activeNoti = '';
  visibleNoti = false;

  constructor(private router: Router,
              private serviceIdea: IdeasService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/ingresar']);
  }

  createIdea(){

    this.serviceIdea.createIdea().subscribe(
      response => {
        var id = response;
        this.router.navigate(['/ideas', id]);
      },
      error => {

      }
    )
  }

  toggle() {
    /* hide others options */
    this.showNoti = false;
    this.activeNoti = '';


    this.show = !this.show;
    this.visible = !this.visible;
    this.active = this.visible ? 'active' : '';
  }

  toggleNoti() {
    /* hide others options */
    this.active = '';
    this.show = false;


    this.showNoti = !this.showNoti;
    this.visibleNoti = !this.visibleNoti;
    this.activeNoti = this.visibleNoti ? 'active' : '';
  }
}
