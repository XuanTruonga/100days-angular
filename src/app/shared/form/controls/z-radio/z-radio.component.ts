import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

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
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() className: string = '';
  @Input({ required: true }) options: ZRadioOption<T>[] = [];
  @Input({ required: true }) control!: FormControl<T>;

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
