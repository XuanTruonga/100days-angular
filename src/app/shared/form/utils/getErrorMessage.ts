import { AbstractControl } from '@angular/forms';
import { VALIDATION_ERROR_KEYS } from '../contants';

function showControlError(control: AbstractControl | null): boolean {
  return !!control && control.invalid && (control.touched || control.dirty);
}

export function getControlErrorMessage(
  control: AbstractControl | null,
  label = 'Trường này',
): string {
  if (!showControlError(control) || !control?.errors) {
    return '';
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.REQUIRED)) {
    return `${label} là bắt buộc`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.PHONE)) {
    return `${label} phải bắt đầu bằng 0 và có 10 chữ số`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.EMAIL)) {
    return `${label} không hợp lệ`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.MIN_LENGTH)) {
    return `${label} tối thiểu ${control.errors[VALIDATION_ERROR_KEYS.MIN_LENGTH]?.requiredLength} ký tự`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.MAX_LENGTH)) {
    return `${label} tối đa ${control.errors[VALIDATION_ERROR_KEYS.MAX_LENGTH]?.requiredLength} ký tự`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.INTEGER)) {
    return `${label} phải là số nguyên`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.NUMBER)) {
    return `${label} phải là số`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.POSITIVE_INTEGER)) {
    const min =
      control.errors[VALIDATION_ERROR_KEYS.POSITIVE_INTEGER]?.min ?? 0;
    return `${label} phải là số nguyên dương lớn hơn hoặc bằng ${min}`;
  }

  if (control.hasError(VALIDATION_ERROR_KEYS.POSITIVE_NUMBER)) {
    const min = control.errors[VALIDATION_ERROR_KEYS.POSITIVE_NUMBER]?.min ?? 0;
    return `${label} phải là số dương lớn hơn hoặc bằng ${min}`;
  }

  return 'Dữ liệu không hợp lệ';
}
