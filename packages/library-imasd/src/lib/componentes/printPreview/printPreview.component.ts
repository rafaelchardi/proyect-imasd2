import { Component, inject  } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { TypeMinePrint } from '../../enum';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'rct-printpreview',
  templateUrl: './printPreview.component.html',
  styleUrls: ['./printPreview.component.scss'],
  
})
export class PrintPreviewComponent {
  type   : TypeMinePrint = TypeMinePrint.APPLICATION_PDF;
  private sanitizer=  inject(DomSanitizer);
  public dialogRef =  inject( MatDialogRef<PrintPreviewComponent>);
  private data = inject(MAT_DIALOG_DATA);
  base64:SafeResourceUrl;

  constructor (){
     if (this.data.format) {
      this.type = this.data.type;
     }
     const aux= this.data.base64;
      this.base64 = this.sanitizer.bypassSecurityTrustResourceUrl( 'data:' + this.type + ';base64,' + aux);
  }
}

/* const dialogConfig = new MatDialogConfig ();
dialogConfig.disableClose = false;
dialogConfig.autoFocus = true;
dialogConfig.height = '600px',
dialogConfig.width = '900px', 
dialogConfig.data = { base64 , type: TypeMinePrint.APPLICATION_PDF};

const dialogRef: MatDialogRef<PrintPreviewComponent>
        = this.dialog.open( PrintPreviewComponent , dialogConfig);
         dialogRef.afterClosed().subscribe(() => {});
} */