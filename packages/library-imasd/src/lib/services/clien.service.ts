import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Clien } from '../interfaces/clien/clien.inteface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClienService {
  
  private _httpService = inject( HttpService );

  public get(): Observable<Clien[]> {
    return this._httpService.get<Clien[]>( 'clien' );
  }
}
