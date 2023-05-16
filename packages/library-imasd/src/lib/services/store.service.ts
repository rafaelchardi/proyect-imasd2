import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public isLoading$ = new EventEmitter<boolean>();
  
}
