import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public addLabel = 'Dodaj temat';
  public myListLabel = '';

  constructor(public authService: AuthService) {
    this.myListLabel = this.authService.isStudent() ? 'Mój temat' : 'Moje dodane tematy';
  }

  onLogout() {
    this.authService.logout();
  }
}
