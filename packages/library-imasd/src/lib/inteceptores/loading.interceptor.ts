import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { StoreService } from '../services/store.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _storeService: StoreService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this._storeService.isLoading$.emit(true);
   return next.handle(req).pipe(
          finalize(() => {
            this._storeService.isLoading$.emit(false);
          })
        );
  }
}
