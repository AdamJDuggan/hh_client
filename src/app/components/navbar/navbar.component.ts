// Angular
import { Component } from '@angular/core';
// Utils
import variables from '../../utils/variables';
// Routes
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  menuOpen: boolean = false;

  onToggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onResize(event: any) {
    if (event.target.innerWidth >= variables.BREAKPOINTS.MD && this.menuOpen) {
      this.menuOpen = false;
    }
  }
  homeRoute = routes.HOME;
  links = [
    { value: routes.HUBS, label: 'Hubs' },
    { value: routes.ACCOUNT, label: 'Account' },
  ];
}
