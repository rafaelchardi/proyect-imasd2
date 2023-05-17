import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
    selector: 'rct-component',
    templateUrl: 'snack-bar-component.html',
    
  })
  export class snackBarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  }