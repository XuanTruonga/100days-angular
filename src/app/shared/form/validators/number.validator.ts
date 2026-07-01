import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { VALIDATION_ERROR_KEYS } from '../contants';

export function decimalValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();

    if (!value) {
      return null;
    }

    return /^-?\d+(\.\d+)?$/.test(value)
      ? null
      : { [VALIDATION_ERROR_KEYS.NUMBER]: true };
  };
}

/**
 * Kiểm tra số thập phân.
 *
 * Hợp lệ:
 * - 0
 * - 1
 * - 1.5
 * - -1
 * - -1.5
 * - 0.25
 *
 * Không hợp lệ:
 * - abc
 * - 1.2.3
 * - 1,5
 * - +
 * - -
 */
