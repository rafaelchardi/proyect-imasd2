import { Component, computed, inject } from '@angular/core';
import { AuthService, Clien, ClienService, Roles } from '@imasd/libraryImasd';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-clien',
  templateUrl: './clien.component.html',
  styleUrls: ['./clien.component.scss'],
})
export class ClienComponent {
  authService = inject( AuthService );
  roles = Roles; 
  currentUser =  computed( () => this.authService.currentUser());
  clientes:Clien[]=[];
  constructor() {
    const clienService = inject( ClienService );
    clienService.get().subscribe((x:Clien[])=>this.clientes=x)

  }
}
