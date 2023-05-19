import { SelectItem } from './../../../../../../node_modules/primeng/api/selectitem.d';
import { Component,  ViewChildren,  computed,  inject } from '@angular/core';
import { MainService } from '../../services';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';


@Component({
  selector: 'rct-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChildren('panelmenu') panelmenu!: PanelMenuModule ;
  mainService = inject( MainService );
  router = inject( Router );
  selectItem!:any;
  itemsMenu = [
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                command: () => this.navegateTo('/clien')
                
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    }];

  sidebarVisible =  computed( () => this.mainService.menuShow());
  onHide(){
    this.mainService.toggleMenu(!this.sidebarVisible());
  }

  navegateTo(path:string){
    this.router.navigate([path]);  
    this.mainService.toggleMenu(false);
  }

}
