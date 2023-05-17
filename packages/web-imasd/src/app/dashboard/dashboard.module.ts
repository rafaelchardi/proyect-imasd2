import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {  LibraryImasdModule } from '@imasd/libraryImasd';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibraryImasdModule
  ]
})
export class DashboardModule { }
