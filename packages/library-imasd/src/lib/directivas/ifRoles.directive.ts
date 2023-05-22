
/* <p *rctIfRoles ="[roles.ADMIN]"  > ADMIN   client works!</p> */

import { Directive, Input,  TemplateRef, ViewContainerRef, inject, computed } from '@angular/core';
import { Roles } from '../enum';
import { AuthService } from '../services';

@Directive({
  selector: '[rctIfRoles]'
})
export class IfRolesDirective {


  authService = inject( AuthService );
  private currentUser = computed( () => this.authService.currentUser() );

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input()
  set rctIfRoles(roles:Roles[]) {
    if (this.currentUser()?.roles?.some(role => roles.includes(role))) {
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();
  }
  }
}