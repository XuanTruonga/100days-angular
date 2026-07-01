import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { resolveLayout } from '../../utils/getResolveLayout';

@Component({
  selector: 'app-z-range-picker',
  standalone: true,
  templateUrl: './z-range-picker.component.html',
  styleUrls: ['./z-range-picker.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,
  ],
})
export class ZRangePickerComponent {
  label = input('');
  required = input(false);
  placeholder = input<[string, string]>(['Từ ngày', 'Đến ngày']);
  className = input('');
  showTime = input(false);

  control = input.required<FormControl<[Date, Date] | null>>();

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
}
