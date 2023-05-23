import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map, of,  take,  throwError } from 'rxjs';


import { BASE_URL } from '../inyectables';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';
import { Menu } from '../interfaces/menu.interface';
import { MenuService } from './menu.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly baseUrl: string = inject(BASE_URL);
  
  private http = inject( HttpClient );
    
  private menuService = inject( MenuService );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );
  public _currentMenu = signal<Menu[]|null>(null);

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );
  public currentMenu = computed( () => this._currentMenu() );

  constructor() {
    this.checkAuthStatus().subscribe();

    /* const url   = `${ this.baseUrl }/auth/check-t1222oken`;
    this.http.get<CheckTokenResponse>(url).subscribe(); */
 
  }

  private setAuthentication(user: User, token:string): boolean {

    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);

    this.menuService.get().pipe(take(1)).subscribe(x=>{
      this._currentMenu.set(x)
      
    }
      )
    
    return true;
  }




  login( email: string, password: string ): Observable<boolean> {

    const url  = `${ this.baseUrl }/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication( user, token )),
        catchError( err => throwError( () => err.error.message ))
      );
  }

  checkAuthStatus():Observable<boolean> {

    const url   = `${ this.baseUrl }/auth/check-token`;
    const token = localStorage.getItem('token');

    if ( !token ) {
      this.logout();
      return of(false);
    }
      return this.http.get<CheckTokenResponse>(url)
        .pipe(
          map( ({ user, token }) => this.setAuthentication( user, token )),
          catchError(() => {
            this._authStatus.set( AuthStatus.notAuthenticated );
            return of(false);
          })
        );


  }

  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set( AuthStatus.notAuthenticated );
    this._currentMenu.set(null);

  }


}
