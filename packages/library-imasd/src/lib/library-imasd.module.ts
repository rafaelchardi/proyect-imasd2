import { NgModule } from '@angular/core';

import { StringtonumberPipe } from './pipes';
import {
  ControlErrorDirective,
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
    PrintPreviewComponent
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
    PrintPreviewComponent
  ],
})
export class LibraryImasdModule {}
