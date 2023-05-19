import { Component, inject } from '@angular/core';
import { ClienService } from '@imasd/libraryImasd';
import { Clien } from 'packages/library-imasd/src/lib/interfaces/client.interface';

@Component({
  selector: 'app-clien',
  templateUrl: './clien.component.html',
  styleUrls: ['./clien.component.scss'],
})
export class ClienComponent {
  constructor() {
    const clienService = inject( ClienService );
    //clienService.get().subscribe((x:Clien[])=>console.log(x))

  }
}
