import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';

import {  LibraryImasdModule } from '@imasd/libraryImasd';
import { ClienComponent } from './clien/clien.component';
@NgModule({
  declarations: [
    ClienComponent
   
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    LibraryImasdModule
  ]
})
export class VentasModule { }
