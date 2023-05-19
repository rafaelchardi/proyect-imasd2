import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


import { BASE_URL } from '../inyectables';

import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly baseUrl: string = inject(BASE_URL);
  
  private http = inject( HttpClient );

  public get(): Observable<Menu[]> {
    const url  = `${ this.baseUrl }/menu`;
    return this.http.get<Menu[]>( url );

  }
}
