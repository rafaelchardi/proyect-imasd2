import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isEmptyReturn } from '../functions';

@Injectable({
  providedIn: 'root',
})
export class messageService {
  private _snackBar = inject(MatSnackBar);

  public customError(error: any) {
    console.log(error);
  }

  elementCreate(title:string){
    this._snackBar.open(title, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
      panelClass: ['nackbar-element-create'],
    }); 
  }

  elementDelete(title:string){
    this._snackBar.open(title, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
      panelClass: ['nackbar-element-delete'],
    }); 
  }

  public httpError(error: any) {
    let title = '';
    if (error instanceof HttpErrorResponse) {
      title =error?.error?.message + isEmptyReturn(error?.error?.error,'','->'+error?.error?.error) ;
    } else {
      title = `Error ${error.status} :` + error.msg;
    }
    let panelClass = 'snackbar-red';
    if (error.status >= 400 && error.status <= 499) {
      panelClass = 'snackbar-warning';
    }
    if (error.status >= 500 && error.status <= 599) {
       panelClass = 'snackbar-error';
    }

    this._snackBar.open(title, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
      panelClass: [panelClass],
    });
  }
}




       /* this._snackBar.openFromComponent(snackBarComponent, {
              duration:  5000,
              panelClass: ['snackBarHttpError'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
              data: {
                title
              },
            });   */