
/* <ng-container #t="rctHasRoles" [rctHasRoles] ="[roles.ADMIN]" [hasRolesFor]="currentUser()">
     <p *ngIf="t.visible" > t.visible only </p>
</ng-container> */

import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Roles } from '../enum';
import { User } from '../interfaces';

@Directive({
    selector: '[rctHasRoles]',
    exportAs: "rctHasRoles"
})
export class HasRolesDirective implements OnChanges {
    visible=false;
    private roles: Roles[] = [];
    private user: User | null = null;

    @Input() set rctHasRoles(roles: Roles[]) {
        this.roles = roles;
    }

    @Input() set hasRolesFor(user: User | null) {
        this.user = user;
    };
    
    constructor(private templateRef: ElementRef) {}

    ngOnChanges(): void {
        if (!this.roles?.length || !this.user) {
            return;
        }
        if (this.user.roles?.some(role => this.roles.includes(role))) {
            this.visible = true;
        } else {
            this.visible = false;   
        }
     
    }

}