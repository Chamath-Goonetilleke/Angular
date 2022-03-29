import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPasswordValidator {
  static validateOldPassword(control: AbstractControl){
    return new Promise((resolve) => {
      setTimeout(() => {
        if ((control.value !=='1234')) {
          resolve({ validateOldPassword: true });
        }
        resolve(null);
      },2000);
    });
  }
}
