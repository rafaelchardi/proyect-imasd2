import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

// iconos
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';



 import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';


import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import {
  AuthInterceptor,
  AuthService,
  BASE_URL,
  CustomErrorHandler,
  HttpErrorResponseInterceptor,
  LibraryImasdModule,
  LoadingInterceptor,
} from '@imasd/libraryImasd';
import { environment } from '../environments/environments';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assetslib/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LibraryImasdModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseUrl },
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorResponseInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
      
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService,library: FaIconLibrary) {
    this.translate.setDefaultLang('es');
      library.addIconPacks(fal,fab,far,fas);
  }
}
