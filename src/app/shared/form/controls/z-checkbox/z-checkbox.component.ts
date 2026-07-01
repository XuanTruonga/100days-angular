import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { resolveLayout } from '../../utils/getResolveLayout';

@Component({
  selector: 'app-z-checkbox',
  standalone: true,
  templateUrl: './z-checkbox.component.html',
  styleUrls: ['./z-checkbox.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule],
})
export class ZCheckboxComponent {
  label = input('');

  control = input.required<FormControl<boolean>>();

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
