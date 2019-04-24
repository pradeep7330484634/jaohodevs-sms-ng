import { AbstractControl } from "@angular/forms";

export function EmailValidation(control: AbstractControl) {
  let emailPattern = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
  // console.log(emailPattern);
  if (!emailPattern) {
    return { emailvalidator: true };
  } else {
    return null;
  }
}

export function PasswordValidation(control: AbstractControl) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{5,50}$/.test(control.value);
  if (!passwordPattern) {
    return { passwordValidator: true }
  }
  return null;
}