import { OldPasswordValidator } from './old-password.validator';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exercise2',
  templateUrl: './form-exercise2.component.html',
  styleUrls: ['./form-exercise2.component.css'],
})
export class FormExercise2Component implements OnInit {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      oldPassword: [
        '',
        Validators.required,
        OldPasswordValidator.validateOldPassword, 
      ],
      newPassword: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get conformPassword() {
    return this.form.get('conformPassword');
  }

  ngOnInit(): void {}
}
