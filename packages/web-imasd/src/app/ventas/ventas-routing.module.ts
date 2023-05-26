import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienComponent } from './clien/clien.component';


const routes: Routes = [
  {
    path: 'clien',
    component: ClienComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
