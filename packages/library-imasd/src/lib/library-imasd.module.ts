import { NgModule } from '@angular/core';

import { StringtonumberPipe } from './pipes';
import {
  ControlErrorDirective,
  ObserveVisibilityDirective,
  TooltipPopupDirective,
} from './directivas';
import { InputCustomizadoComponent, LoadingComponent } from './componentes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SharedModule } from './shared.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [SharedModule,RouterModule],
  exports: [
    LoadingComponent,
    StringtonumberPipe,
    TooltipPopupDirective,
    InputCustomizadoComponent,
    ObserveVisibilityDirective,
    LoginPageComponent,
    ControlErrorDirective,
    HeaderComponent,
    MenuComponent
  ],
})
export class LibraryImasdModule {}
