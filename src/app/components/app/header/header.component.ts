import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  show = false;
  active = 'active';
  visible = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/ingresar']);
  }

  toggle() {
    this.visible = !this.visible;
    this.active = this.visible ? 'active' : '';
  }

}
