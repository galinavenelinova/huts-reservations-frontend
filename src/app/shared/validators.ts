import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value as string);
  if (!value) {
    return null;
  }
  const isValidEmail = /^[a-zA-Z0-9\.-_]+@\w+\.\w+$/.test(value);
  return isValidEmail ? null : {emailValidator: true};
}

export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
  return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const areTheSame = targetControl.value === control.value;
    return areTheSame ? null : {rePasswordValidator: true};
  };
}

export function datesValidatorFactory(targetControl: AbstractControl): ValidatorFn {
  return function datesValidator(control: AbstractControl): ValidationErrors | null {
    const areValid = targetControl.value < control.value;
    console.log(targetControl.value + ' ; ' + control.value + ' ; ' + areValid);
    return areValid ? null : {datesValidator: true};
  };
}

export function dateLaterCurrentValidator(control: AbstractControl): ValidationErrors | null {
  const currentDate = new Date();
  const controlDate = new Date(control.value);
  const isValid = controlDate > currentDate || controlDate.toDateString() === currentDate.toDateString();
  console.log('control.value: ' + control.value + '; isValid: ' + isValid);
  return isValid ? null : {dateLaterCurrentValidator: true};
}

