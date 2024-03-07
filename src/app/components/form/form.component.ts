import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  ngOnInit(): void {}
  // controlErrors = this.form.get('yourControlName').errors;

  onSubmit() {
    console.log(this.form);
  }

  getControlErrors = (name: string) => {
    const control = this.form.get(name);
    if (control.errors && control.touched) {
      const errorMessages = {
        required: 'Required field',
        email: 'Please enter email',
      };
      return errorMessages[Object.keys(control.errors)[0]];
    } else return null;
  };
}
