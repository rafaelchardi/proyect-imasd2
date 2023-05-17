import { Directive, ElementRef, HostListener, Input, OnDestroy  } from '@angular/core';
@Directive({
  selector: '[rctToolTipPopup]',
})
export class TooltipPopupDirective implements  OnDestroy {
  @Input() tooltippopup = ''; 
  @Input() timeWait = 200; 
  
  private popup: any;
  private tiempoenpopup: any;

  constructor(private el: ElementRef) {
  }
  

  ngOnDestroy(): void {
    if (this.popup) {
      this.popup.remove();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.tiempoenpopup = setTimeout(() => {
      const pos_x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth; 
      const pos_y = this.el.nativeElement.getBoundingClientRect().top;
      this.creaPopup(pos_x, pos_y);
    }, this.timeWait);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tiempoenpopup) clearTimeout(this.tiempoenpopup);
    if (this.popup) {
      this.popup.remove();
    }
  }

  private creaPopup(posx: number, posy: number) {
    const divpopup = document.createElement('div');
    divpopup.innerHTML = this.tooltippopup;
    divpopup.setAttribute('class', 'tooltippopup-container');
    divpopup.style.top = posy.toString() + 'px';
    divpopup.style.left = posx.toString() + 'px';
    document.body.appendChild(divpopup);
    this.popup = divpopup;
  }
}
