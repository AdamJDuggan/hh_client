// Angular
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
// Services
import { ValidateFormService } from '../../services/validate-form-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', '../../../styles.sass'],
})
export class LoginComponent {
  constructor(private validateForm: ValidateFormService) {}

  validateAreEqual = (control: AbstractControl) => {
    const password = control?.parent?.get('password');
    const confirmPassword = control?.parent?.get('confirmPassword');
    return password?.value != confirmPassword?.value
      ? { noMatch: 'Must match password' }
      : null;
  };

  form = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.min(2)]),
    lastNames: new FormControl(null, [Validators.required, Validators.min(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      this.validateAreEqual,
    ]),
  });

  getControlErrors = (name: string) =>
    this.validateForm.getErrors(this.form.get(name));

  onSubmit() {
    console.log(this.form);
  }
}
