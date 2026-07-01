import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { VALIDATION_ERROR_KEYS } from '../contants';

export function positiveIntegerValidator(min = 0): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();

    if (!value) {
      return null;
    }

    if (!/^\d+$/.test(value)) {
      return { positiveInteger: { min } };
    }

    const num = Number(value);

    return num >= min ? null : { [VALIDATION_ERROR_KEYS.POSITIVE_INTEGER]: { min } };
  };
}

/**
 * Kiểm tra số nguyên dương.
 *
 * @param min Giá trị nhỏ nhất (mặc định: 0).
 *
 * Điều kiện:
 * - Là số nguyên.
 * - Lớn hơn hoặc bằng min.
 *
 * Ví dụ:
 * positiveIntegerValidator()      => >= 0
 * positiveIntegerValidator(10)    => >= 10
 *
 * Hợp lệ(mặc định min = 0):
 * - 1
 * - 100
 *
 * Không hợp lệ(mặc định min = 0):
 * - 0
 * - -1
 * - 1.5
 * - abc
 */
