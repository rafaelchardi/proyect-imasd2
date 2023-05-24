import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthStatus, StoreService } from '@imasd/libraryImasd';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {
  title = 'web-imasd';
  isLoading = false;
  public authService = inject( AuthService );
  private router = inject( Router );
  private _storeService = inject( StoreService );
  private httpClient  = inject(  HttpClient);
  
  constructor(
    protected faConfig: FaConfig,
    ) {
      faConfig.defaultPrefix = 'fal';
         this._storeService.isLoading$.subscribe((isLoading:boolean) => {
          this.isLoading = isLoading
    });
    }

  public finishedAuthCheck = computed<boolean>( () => {
    if ( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }
    return true;
  });

  public autorizado = computed<boolean>( () => {
    if ( this.authService.authStatus() === AuthStatus.authenticated ) {
      return true;
    }

    return false;
  });

  public authStatusChangedEffect = effect(() => {

    switch( this.authService.authStatus() ) {

      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;

    }




  });

  ngOnInit() {
    const configLocal = localStorage.getItem('version');
    const headers = new HttpHeaders()
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache'); 
    this.httpClient
      .get<{ version: string }>("/assetslib/version.json", {headers})
      .subscribe(config => {
       if (config.version !== configLocal) {
          location.reload(); 
          localStorage.setItem('version', config.version)
       }
    });

  }


}
