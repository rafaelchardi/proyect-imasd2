import { Injectable, computed,  signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _menuShow = signal<boolean>(false);
  public menuShow = computed( () => this._menuShow() );
  toggleMenu(estate:boolean){
    this._menuShow.set(estate)
    
  }
}
