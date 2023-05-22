import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
  })
  export class ErrorService {
  
   
    private _snackBar = inject( MatSnackBar );
    
    public customError(error:any){
         console.log(error);
    }


    public httpError(error:any){
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
  
    }
  }
  