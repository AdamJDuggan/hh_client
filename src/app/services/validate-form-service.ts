import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateFormService {
  constructor() {}

  getErrors = (control: AbstractControl) => {
    if (control.errors && control.touched) {
      const hasOwnMessage =
        typeof Object.values(control.errors)[0] === 'string';
      const errorMessages = {
        required: 'Required field',
        email: 'Please enter email',
        noMatch: 'Must match password',
      };
      return hasOwnMessage
        ? Object.values(control.errors)[0]
        : errorMessages[Object.keys(control.errors)[0]];
    } else return null;
  };
}
