import { Component,   computed,  inject } from '@angular/core';
import { AuthService, MainService } from '../../services';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Menu } from '../../interfaces/menu.interface';
import { isEmpty } from '../../functions';


@Component({
  selector: 'rct-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  mainService = inject( MainService );
  authService = inject( AuthService );
  router = inject( Router );
  translateService = inject( TranslateService );
  
  
  sidebarVisible =  computed( () => this.mainService.menuShow());
  itemsMenu:any =  computed( () => {
    const menu = this.authService.currentMenu()
    this.iterateCreateNavegates(menu,'');
    return menu;

  } );

  currentUser = computed(() => this.authService.currentUser());


  iterateCreateNavegates(obj:any, stack:any) {
    for (const property in obj) {
        if (obj[property]) {
          if (property == 'label') {
            obj[property] = this.translateService.instant(obj[property]);
          }
          if (typeof obj[property] == "object") {
                this.iterateCreateNavegates(obj[property], stack + '.' + property);
            } else {
                if (property == 'path') {
                  obj.command =  ({ originalEvent,item }: {  originalEvent: PointerEvent ,item :Menu }) => {
                    this.navegateTo(obj[property],item)
                  } 
                }
                
            }
        }
    }
 }
 onHide(){
    this.mainService.toggleMenu(!this.sidebarVisible());
 }
 navegateTo(path:string,item:Menu){
  
   let navegate = false; 
   if (!isEmpty(item?.roles) && ( (item?.roles?.length || 0) > 0)) {
      if (this.currentUser()?.roles?.some((role) => item.roles?.includes(role))) navegate = true;
          else navegate = false;
      }
      if (navegate) {
      this.router.navigate([path], { state: { roles: JSON.stringify(item.roles) } });

    }
    this.mainService.toggleMenu(false);
  }
}
