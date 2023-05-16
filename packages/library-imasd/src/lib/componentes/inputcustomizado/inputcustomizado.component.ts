import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControlName, NgControl, NG_VALUE_ACCESSOR, FormGroupDirective, FormControlDirective, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-inputcustomizado',
  templateUrl: './inputcustomizado.component.html',
  styleUrls: ['./inputcustomizado.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCustomizadoComponent),
      multi: true
    }
  ]
})
export class InputCustomizadoComponent implements OnInit ,ControlValueAccessor {
  @Input() myLabel: string = '';
  counter: number = 0;
  value: string='';
  isDisabled: boolean=false;
  formcontrol:any;
  onChange = (_:any) => { }
  onTouch = () => { }
  constructor(private inj:Injector) { }
  ngOnInit() {
    // Inyectar control en ControlValueAccessor por si lo necesitamos
     const ngControl = this.inj.get(NgControl);
     if (ngControl instanceof FormControlName) {
      this.formcontrol = this.inj.get(FormGroupDirective).getControl(ngControl)
     } else {
      this.formcontrol = (ngControl as FormControlDirective).form as FormControl;
     }
     console.log(this.formcontrol); 
  }
  onInput(event: any) {
    this.counter = event.target.value.length;
    this.value = event.target.value;
    this.onTouch();
    this.onChange(this.value);
  }
  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
