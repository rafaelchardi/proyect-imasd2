import { NgModule } from '@angular/core';

import { StringtonumberPipe } from './pipes';
import {
  ControlErrorDirective,
  IfRolesDirective,
  ObserveVisibilityDirective,
  TooltipPopupDirective,
} from './directivas';
import { InputCustomizadoComponent, LoadingComponent, PrintPreviewComponent } from './componentes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SharedModule } from './shared.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PrimeSharedModule } from './primeShared.module';
import { HasRolesDirective } from './directivas/hasRoles.directive';

@NgModule({
  declarations: [
    StringtonumberPipe,
    TooltipPopupDirective,
    LoadingComponent,
    InputCustomizadoComponent,
    ObserveVisibilityDirective,
    ControlErrorDirective,
    LoginPageComponent,
    HeaderComponent,
    MenuComponent,
    PrintPreviewComponent,
    HasRolesDirective,
    IfRolesDirective
  ],
  imports: [SharedModule,RouterModule,PrimeSharedModule],
  exports: [
    LoadingComponent,
    StringtonumberPipe,
    TooltipPopupDirective,
    InputCustomizadoComponent,
    ObserveVisibilityDirective,
    LoginPageComponent,
    ControlErrorDirective,
    HeaderComponent,
    MenuComponent,
    PrintPreviewComponent,
    HasRolesDirective,
    IfRolesDirective
  ],
})
export class LibraryImasdModule {}
