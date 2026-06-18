// shared/utils/form-error.util.ts

import { AbstractControl } from '@angular/forms';

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

  if (control.hasError('required')) {
    return `${label} là bắt buộc`;
  }

  if (control.hasError('phone')) {
    return 'Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số';
  }

  if (control.hasError('email')) {
    return 'Email không hợp lệ';
  }

  if (control.hasError('minlength')) {
    return `Tối thiểu ${control.errors['minlength'].requiredLength} ký tự`;
  }

  if (control.hasError('maxlength')) {
    return `Tối đa ${control.errors['maxlength'].requiredLength} ký tự`;
  }
  if (control.hasError('integer')) {
    return `${label} phải là số nguyên`;
  }

  if (control.hasError('decimal')) {
    return `${label} phải là số`;
  }

  if (control.hasError('positiveInteger')) {
    const min = control.errors['positiveInteger']?.min ?? 0;
    return `${label} phải là số nguyên dương lớn hơn hoặc bằng ${min}`;
  }

  if (control.hasError('positiveDecimal')) {
    const min = control.errors['positiveDecimal']?.min ?? 0;
    return `${label} phải là số thập phân dương lớn hơn hoặc bằng ${min}`;
  }

  return 'Dữ liệu không hợp lệ';
}
