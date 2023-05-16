import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringtonumberPipe } from './pipes';
import { ObserveVisibilityDirective, TooltipPopupDirective } from './directivas';
import { InputCustomizadoComponent, LoadingComponent } from './componentes';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    StringtonumberPipe,
    TooltipPopupDirective,
    LoadingComponent,
     InputCustomizadoComponent,ObserveVisibilityDirective
 
  ],
  imports: [
   MatSnackBarModule,
   MatProgressSpinnerModule,
   FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
  ],
  exports: [
    LoadingComponent,
    StringtonumberPipe,
    TooltipPopupDirective,
    InputCustomizadoComponent,ObserveVisibilityDirective
  ]
})
export class LibraryImasdModule {}
