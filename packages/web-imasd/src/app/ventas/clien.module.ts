import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './clien-routing.module';

import {  LibraryImasdModule } from '@imasd/libraryImasd';
import { ClienComponent } from './clien/clien.component';
@NgModule({
  declarations: [
    ClienComponent
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LibraryImasdModule
  ]
})
export class ClientModule { }
