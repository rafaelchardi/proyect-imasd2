
import {Injectable,inject} from '@angular/core';
import {HttpClient,  HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable} from "rxjs";
import { BASE_URL } from '../inyectables';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 private readonly baseUrl: string = inject(BASE_URL);
  private http = inject( HttpClient);
  
  get<T>(path: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const url = this.getFullUrl(path);
    return this.http.get<T>(url, {params, headers});
  }

  post<T>(path: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const url = this.getFullUrl(path);
    return this.http.post<T>(url, body, {params, headers});
  }

  put<T>(path: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const url = this.getFullUrl(path);
    return this.http.put<T>(url, body, {params, headers});
  }

  patch<T>(path: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const url = this.getFullUrl(path);
    return this.http.patch<T>(url, body, {params, headers});
  }

  delete<T>(path: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const url = this.getFullUrl(path);
    return this.http.delete<T>(url, {params, headers});
  }
  private getFullUrl(path: string): string {
    return `${this.baseUrl}/${path}`;
  }
}