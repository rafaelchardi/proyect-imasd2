import { Component,  ViewChildren,  computed,  inject } from '@angular/core';
import { AuthService, MainService } from '../../services';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'rct-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChildren('panelmenu') panelmenu!: PanelMenuModule ;
  mainService = inject( MainService );
  authService = inject( AuthService );
  router = inject( Router );
  translateService = inject( TranslateService );
  
  
  sidebarVisible =  computed( () => this.mainService.menuShow());
  itemsMenuaux:any =  computed( () => {
    const menu = this.authService.currentMenu()
    this.iterateCreateNavegates(menu,'');
    return menu;

  } );
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
                  obj.command =  () => this.navegateTo(obj[property])
                }
                
            }
        }
    }
 }
 onHide(){
    this.mainService.toggleMenu(!this.sidebarVisible());
 }
 navegateTo(path:string){
    this.router.navigate([path]);  
    this.mainService.toggleMenu(false);
  }

}
