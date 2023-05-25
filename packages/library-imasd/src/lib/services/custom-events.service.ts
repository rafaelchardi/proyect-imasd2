import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { CustomsEvents } from '../enum';


@Injectable({
  providedIn: 'root',
})
export class CustomsEventsService {
 
  listenCustomEvent(type: CustomsEvents): Observable<CustomsEvents> {
    return fromEvent<CustomsEvents>(window, type);
  }
  sendCustomEvent(type: CustomsEvents, notificacion={}): void {
    const customsEvent = new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail: {
        customData: notificacion,
      },
    });
    
    dispatchEvent(customsEvent);
  }
}
