import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  computed,
  input,
  viewChild,
  effect,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ILayoutForm, ILayoutKey } from '../../../../types/form.ant.types';
import { DEFAULT_GUTTER } from '../../contants';
import { resolveLayout } from '../../utils/getResolveLayout';
import { getGutterStyle } from '../../utils/getGutterStyle';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

@Component({
  selector: 'app-z-text-area',
  standalone: true,
  templateUrl: './z-text-area.component.html',
  styleUrls: ['./z-text-area.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule],
})
export class ZTextAreaComponent {
  label = input('');
  required = input(false);
  placeholder = input('');
  autoFocus = input(false);
  className = input('');
  rows = input(4);

  control = input.required<FormControl<string>>();

  layout = input<ILayoutForm | undefined>();
  layoutKey = input<ILayoutKey | undefined>();
  gutter = input<number | [number, number]>(DEFAULT_GUTTER);

  textAreaRef = viewChild<ElementRef<HTMLTextAreaElement>>('textAreaRef');

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
        this.textAreaRef()?.nativeElement.focus();
      }
    });
  }
}
