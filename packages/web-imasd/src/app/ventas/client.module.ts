import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import {  LibraryImasdModule } from '@imasd/libraryImasd';
import { ClientComponent } from './client/client.component';
@NgModule({
  declarations: [
    ClientComponent
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LibraryImasdModule
  ]
})
export class ClientModule { }
