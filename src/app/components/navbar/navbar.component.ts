// Angular
import { Component } from '@angular/core';

// Utils
import variables from '../../utils/variables';

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

  links = [
    { route: '/hubs', label: 'Hubs' },
    { route: '/account', label: 'Account' },
  ];
}
