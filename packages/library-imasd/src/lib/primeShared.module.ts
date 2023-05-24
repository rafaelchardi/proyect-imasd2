import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [],
  imports: [SidebarModule,ButtonModule,ToolbarModule,BadgeModule,AvatarModule,OverlayPanelModule,PanelMenuModule],
  exports: [SidebarModule,ButtonModule,ToolbarModule,BadgeModule,AvatarModule,OverlayPanelModule,PanelMenuModule],
})
export class PrimeSharedModule {}