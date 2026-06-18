import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function positiveDecimalValidator(min = 0): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();

    if (!value) {
      return null;
    }

    if (!/^\d+(\.\d+)?$/.test(value)) {
      return { positiveDecimal: { min } };
    }

    const num = Number(value);

    return num >= min ? null : { positiveDecimal: { min } };
  };
}

/**
 * Kiểm tra số thập phân dương.
 *
 * @param min Giá trị nhỏ nhất (mặc định min = 0).
 *
 *  * Điều kiện:
 * - Là số thập phân.
 * - Lớn hơn hoặc bằng min.
 *
 *
 * Ví dụ:
 * positiveDecimalValidator()    => >= 0
 * positiveDecimalValidator(10)  => >= 10
 *
 *  * Hợp lệ(mặc định min = 0):
 * - 0
 * - 1
 * - 1.5

 *
 * Không hợp lệ(măc định min = 0):
 * -1
 * -1.5
 * - abc
 * - 1.2.3
 * - 1,5
 * - +
 * - -
 */
