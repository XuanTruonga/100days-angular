import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

type ZInputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-z-input',
  standalone: true,
  templateUrl: './z-input.component.html',
  styleUrls: ['./z-input.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule],
})
export class ZInputComponent {
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() type: ZInputType = 'text';
  @Input() autoFocus = false;
  @Input() className = '';
  @Input({ required: true }) control!: FormControl<string>;

  get showError(): boolean {
    return (
      !!this.control &&
      this.control.invalid &&
      (this.control.touched || this.control.dirty)
    );
  }

  get errorMessage(): string {
    if (!this.showError || !this.control.errors) return '';

    if (this.control.hasError('required')) {
      return `${this.label || 'Trường này'} là bắt buộc`;
    }

    if (this.control.hasError('email')) {
      return 'Email không hợp lệ';
    }

    if (this.control.hasError('minlength')) {
      return `Tối thiểu ${this.control.errors['minlength'].requiredLength} ký tự`;
    }

    if (this.control.hasError('maxlength')) {
      return `Tối đa ${this.control.errors['maxlength'].requiredLength} ký tự`;
    }

    return 'Dữ liệu không hợp lệ';
  }
}
