import { Component,  computed, inject } from '@angular/core';
import { AuthService, Clien, ClienService, Roles } from '@imasd/libraryImasd';

@Component({
  selector: 'app-clien',
  templateUrl: './clien.component.html',
  styleUrls: ['./clien.component.scss'],
})
export class ClienComponent {
  _authService = inject( AuthService );
  roles = Roles; 
  currentUser =  computed( () => this._authService.currentUser());
  clientes:Clien[]=[];
  constructor() {
    const _clienService = inject( ClienService );
    _clienService.get().subscribe((x:Clien[])=>this.clientes=x)

  }
}
