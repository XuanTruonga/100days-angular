import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  computed,
  input,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { resolveLayout } from '../../utils/getResolveLayout';

type ZInputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-z-input',
  standalone: true,
  templateUrl: './z-input.component.html',
  styleUrls: ['./z-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
  ],
})
export class ZInputComponent {
  label = input('');
  required = input(false);
  placeholder = input('');
  type = input<ZInputType>('text');
  autoFocus = input(false);
  className = input('');

  control = input.required<FormControl<string>>();

  layout = input<ILayoutForm | undefined>();
  layoutKey = input<ILayoutKey | undefined>();
  gutter = input<number | [number, number]>(DEFAULT_GUTTER);

  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  resolvedLayout = computed(() =>
    resolveLayout(this.layout(), this.layoutKey()),
  );

  gutterStyle = computed(() => getGutterStyle(this.gutter()));

  get errorMessage(): string {
    return getControlErrorMessage(this.control(), this.label());
  }

  constructor() {
    afterNextRender(() => {
      if (this.autoFocus()) {
        this.inputRef()?.nativeElement.focus();
      }
    });
  }
}
