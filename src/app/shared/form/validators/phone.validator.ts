import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function vietnamPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value || '').trim();

    if (!value) return null;

    const isValid = /^0\d{9}$/.test(value);

    return isValid ? null : { phone: true };
  };
}

/**
 * Kiểm tra số điện thoại Việt Nam.
 *
 * Điều kiện:
 * - Gồm 10 chữ số.
 * - Bắt đầu bằng số 0.
 *
 * Hợp lệ:
 * - 0912345678
 *
 * Không hợp lệ:
 * - 912345678
 * - +84912345678
 * - 091234567
 * - 09123456789
 */
