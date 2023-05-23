import {  HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import {  messageService } from '../services';
import { ResponseHtmlCustoms } from '../enum';



@Injectable({
  providedIn: 'root',
})
export class HttpErrorResponseInterceptor implements HttpInterceptor {

  
  private _messageService = inject( messageService );

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((x:any)=>{
        if (x.status ==  201) {
          this._messageService.elementCreate('Elemento creado')
        }
        if (x.status ==  ResponseHtmlCustoms.DELETEOK) {
          this._messageService.elementDelete('Elemento Eliminado')
        }
      }),
      catchError((error) => {
        this._messageService.httpError(error)
        return throwError(() => error);
      })
    );
  }
}
