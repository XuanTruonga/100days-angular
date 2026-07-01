import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { resolveLayout } from '../../utils/getResolveLayout';

export type ZSelectOption = Record<string, unknown>;

export interface ResolvedZSelectOption {
  raw: ZSelectOption;
  label: string;
  value: unknown;
  disabled: boolean;
}

@Component({
  selector: 'app-z-select',
  standalone: true,
  templateUrl: './z-select.component.html',
  styleUrls: ['./z-select.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzSelectModule],
})
export class ZSelectComponent {
  label = input('');
  required = input(false);
  placeholder = input('');
  className = input('');
  allowClear = input(true);

  options = input.required<ZSelectOption[]>();

  labelKey = input('label');
  valueKey = input('value');
  disabledKey = input('disabled');

  control = input.required<FormControl<unknown>>();

  layout = input<ILayoutForm | undefined>();
  layoutKey = input<ILayoutKey | undefined>();
  gutter = input<number | [number, number]>(DEFAULT_GUTTER);

  resolvedLayout = computed(() =>
    resolveLayout(this.layout(), this.layoutKey()),
  );

  gutterStyle = computed(() => getGutterStyle(this.gutter()));

  get errorMessage(): string {
    return getControlErrorMessage(this.control(), this.label());
  }

  resolvedOptions = computed<ResolvedZSelectOption[]>(() =>
    this.options().map((option) => ({
      raw: option,
      label: String(option[this.labelKey()] ?? ''),
      value: option[this.valueKey()],
      disabled: Boolean(option[this.disabledKey()]),
    })),
  );
}
