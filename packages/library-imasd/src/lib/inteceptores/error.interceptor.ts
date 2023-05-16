import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { snackBarComponent } from '../componentes';



@Injectable({
  providedIn: 'root',
})
export class HttpErrorResponseInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar){
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    return next.handle(req).pipe(
      catchError((error) => {
        let title = ''
        if (error instanceof HttpErrorResponse) {
            title = 'Client-side error : ' + error.error.message;
          } else {
            title = `Error ${error.status} :` + error.msg;
          }
          
          if (error.status !== 401 && error.status !== 403) {
            this._snackBar.open(title,'',{horizontalPosition: 'right',
            verticalPosition: 'bottom', duration:  1000});
           /*  this._snackBar.openFromComponent(snackBarComponent, {
              duration:  5000,
              panelClass: ['snackBarHttpError'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
              data: {
                title
              },
            });  */
          }
        return throwError(() => error);
      })
    );
  }
}
