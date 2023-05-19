import { Component, computed, inject } from '@angular/core';
import { MainService } from '../../services';

@Component({
  selector: 'rct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mainService = inject( MainService );
  sidebarVisible =  computed( () => this.mainService.menuShow());

  showMenu(){
    this.mainService.toggleMenu(true);
  }
}
