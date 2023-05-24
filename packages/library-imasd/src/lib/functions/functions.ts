import { FormGroup, ValidationErrors } from '@angular/forms';

const getFormValidationErrors = (form: FormGroup) => {
  Object.keys(form.controls).forEach((key) => {
    const controlErrors: ValidationErrors = form.get(key)?.errors!;
    if (controlErrors != null) {
      Object.keys(controlErrors).forEach((keyError) => {
        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
      });
    } else {
      console.log('Sin errores en el formulario');
    }
  });
};
const isEmpty = (variable: any): boolean => {
  return variable == '' || variable == 'undefined' || variable == null;
}
const isEmptyReturn = (variable: any,valueIfEmpty:any='',valueIfNotEmpty:any=''): boolean => {
   if (isEmpty(variable)) {
     return valueIfEmpty
   } else return valueIfNotEmpty
  
}

/*   value === null ||  value === undefined ||  value === 0 ||  value === false ||  value === NaN ||  value === "" */
const  isFalse = ( valor: any ) => !valor;

export { getFormValidationErrors,isEmpty,isEmptyReturn,isFalse };
