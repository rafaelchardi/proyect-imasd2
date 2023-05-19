import { catchError, throwError } from 'rxjs';
import { HttpHandler, HttpInterceptor, HttpRequest,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class AuthRctInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');
        let pontoken = false;
        if (token) {
            pontoken = true;
        }
        if(req.url.includes("renew") || req.url.includes("login")){
            pontoken = false;
        }

        if (pontoken == true) {
            req = req.clone({ headers: req.headers.set('authorization', 'Bearer ' + token) });
        } else {
            req = req.clone();
        }
        return next.handle( req ).pipe(
            catchError( this.manejarError )
          );
        }

 manejarError( error: HttpErrorResponse ) {
    if (error.status === 401) {
        if (error.error.message == "Token no válido") {
             console.log("Token no válido")
        }    
    }    
     return throwError(error);
}
     
    
}