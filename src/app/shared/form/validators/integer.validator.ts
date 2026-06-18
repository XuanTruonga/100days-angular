import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function integerValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();

    if (!value) {
      return null;
    }

    return /^-?\d+$/.test(value) ? null : { integer: true };
  };
}
/**
 * Validate số nguyên.
 *
 * Hợp lệ:
 * - 0
 * - 1
 * - 123
 * - -1
 * - -999
 * - 00123
 *
 * Không hợp lệ:
 * - 1.5
 * - -1.5
 * - +1
 * - abc
 * - 12a
 * - 1,000
 */
