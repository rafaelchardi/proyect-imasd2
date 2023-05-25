import { ChangeDetectorRef, Component, DestroyRef, OnInit, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthStatus, BoadcastMenssage, BroadcastMenssageService, StoreService  } from '@imasd/libraryImasd';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-imasd';
  isLoading = false;
  public _authService = inject(AuthService);
  private _router = inject(Router);
  private _storeService = inject(StoreService);
  private _httpClient = inject(HttpClient);
  private _faConfig = inject(FaConfig)
  private _broadcastService= inject(BroadcastMenssageService )
  private _cdRef= inject(ChangeDetectorRef )
  private readonly _destroy = inject(DestroyRef); 
  
  public autorizado = computed<boolean>(() => {
    if (this._authService.authStatus() === AuthStatus.authenticated) {
      return true;
    }

    return false;
  });

  public authStatusChangedEffect = effect(() => {
    switch (this._authService.authStatus()) {
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this._router.navigateByUrl('/dashboard');
        return;

      case AuthStatus.notAuthenticated:
        this._router.navigateByUrl('/auth/login');

        this._broadcastService.publish({ type: BoadcastMenssage.LOGOUT, payload: '' });

        return;
    }
  });


  ngOnInit() {

     // confifuar los iconos por defecto
    this._faConfig.defaultPrefix = 'fal';
     
    this._storeService.isLoading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
    // para actulizar en el caso de cambio d version
    const configLocal = localStorage.getItem('version');
    const headers = new HttpHeaders()
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache');
    this._httpClient
      .get<{ version: string }>('/assetslib/version.json', { headers })
      .subscribe((config) => {
        if (config.version !== configLocal) {
          location.reload();
          localStorage.setItem('version', config.version);
        }
      });
  // para controlar el caso de que si se hacen logout y esta en otra persaña se salga
   this._broadcastService.listenOfType(BoadcastMenssage.LOGOUT).pipe(takeUntilDestroyed(this._destroy)).subscribe((x)=>{
    if (x.type == BoadcastMenssage.LOGOUT) {
      this._authService.logout();
      this._cdRef.detectChanges();
    }
   });
  
  }

}
