import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienComponent } from './clien/clien.component';
import { contentRoles } from '@imasd/libraryImasd';

const routes: Routes = [
  {
    path: 'clien',
    component: ClienComponent,
    canActivate:[contentRoles],
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
