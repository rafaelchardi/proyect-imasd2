import { Component, computed, inject } from '@angular/core';
import { AuthService, ClienService, Roles } from '@imasd/libraryImasd';

@Component({
  selector: 'app-clien',
  templateUrl: './clien.component.html',
  styleUrls: ['./clien.component.scss'],
})
export class ClienComponent {
  authService = inject( AuthService );
  roles = Roles; 
  currentUser =  computed( () => this.authService.currentUser());
  constructor() {
    const clienService = inject( ClienService );
    //clienService.get().subscribe((x:Clien[])=>console.log(x))

  }
}
