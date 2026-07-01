import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { resolveLayout } from '../../utils/getResolveLayout';

export interface ZRadioOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

@Component({
  selector: 'app-z-radio',
  standalone: true,
  templateUrl: './z-radio.component.html',
  styleUrls: ['./z-radio.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzRadioModule],
})
export class ZRadioComponent<T = string> {
  label = input('');
  required = input(false);
  className = input('');

  options = input.required<ZRadioOption<T>[]>();
  control = input.required<FormControl<T>>();

  layout = input<ILayoutForm | undefined>();
  layoutKey = input<ILayoutKey | undefined>();
  gutter = input<number | [number, number]>(DEFAULT_GUTTER);

  resolvedLayout = computed(() =>
    resolveLayout(this.layout(), this.layoutKey())
  );

  gutterStyle = computed(() =>
    getGutterStyle(this.gutter())
  );

  errorMessage = computed(() =>
    getControlErrorMessage(this.control(), this.label())
  );
}
