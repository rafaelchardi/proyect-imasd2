import { Injectable,ErrorHandler, inject } from "@angular/core";
import { messageService } from "../services";

@Injectable()
export  class CustomErrorHandler implements ErrorHandler {
  
  private _messageService = inject( messageService );
  handleError(error: any): void {
    this._messageService.customError(error)
  }  }

  
