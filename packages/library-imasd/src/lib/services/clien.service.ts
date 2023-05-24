import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


import { BASE_URL } from '../inyectables';
import { Clien } from '../interfaces/clien/clien.inteface';

@Injectable({
  providedIn: 'root'
})
export class ClienService {

  private readonly baseUrl: string = inject(BASE_URL);
  
  private http = inject( HttpClient );

  public get(): Observable<Clien[]> {
    const url  = `${ this.baseUrl }/clien`;
    return this.http.get<Clien[]>( url );

  }
}
