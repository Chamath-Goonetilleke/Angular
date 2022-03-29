import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form: any = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          UsernameValidators.cannotContaionSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }),
  });

  get username() {
    return this.form.get('account.username');
  }
}
