import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { snackBarComponent } from '../componentes';
import { ErrorService } from '../services';



@Injectable({
  providedIn: 'root',
})
export class HttpErrorResponseInterceptor implements HttpInterceptor {

  
  private _errorService = inject( ErrorService );

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        this._errorService.httpError(error)
        return throwError(() => error);
      })
    );
  }
}
