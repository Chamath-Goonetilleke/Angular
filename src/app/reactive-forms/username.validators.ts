import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContaionSpace(
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContaionSpace: true };
    }
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'chamath') {
          resolve({ shouldBeUnique: true });
        }
        resolve(null);
      }, 5000);
    });
  }
}
