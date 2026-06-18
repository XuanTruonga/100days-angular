import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

export type ZSelectOption = Record<string, unknown>;

@Component({
  selector: 'app-z-select',
  standalone: true,
  templateUrl: './z-select.component.html',
  styleUrls: ['./z-select.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzSelectModule],
})
export class ZSelectComponent {
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() className = '';

  @Input() allowClear = true;

  @Input() options: ZSelectOption[] = [];

  @Input() labelKey = 'label';
  @Input() valueKey = 'value';
  @Input() disabledKey = 'disabled';

  @Input({ required: true })
  control!: FormControl<unknown>;

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }

  getOptionLabel(option: ZSelectOption): string {
    return String(option[this.labelKey] ?? '');
  }

  getOptionValue(option: ZSelectOption): unknown {
    return option[this.valueKey];
  }

  getOptionDisabled(option: ZSelectOption): boolean {
    return Boolean(option[this.disabledKey]);
  }
}
