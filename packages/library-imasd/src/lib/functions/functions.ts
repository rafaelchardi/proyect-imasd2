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

export { getFormValidationErrors };
