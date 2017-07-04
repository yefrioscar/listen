import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'idea-head',
  templateUrl: './idea-head.component.html'
})
export class IdeaHeadComponent implements OnInit {

  show = false;
  active = '';
  visible = false;


  showNoti = false;
  activeNoti = '';
  visibleNoti = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/ingresar']);
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
