import { Injectable,ErrorHandler, inject } from "@angular/core";
import { ErrorService } from "../services";

@Injectable()
export  class CustomErrorHandler implements ErrorHandler {
  
  private _errorService = inject( ErrorService );
  handleError(error: any): void {
    this._errorService.customError(error)
  }  }

  
