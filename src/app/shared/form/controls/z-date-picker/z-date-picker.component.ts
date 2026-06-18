import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { getControlErrorMessage } from '../../utils/getErrorMessage';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-z-date-picker',
  standalone: true,
  templateUrl: './z-date-picker.component.html',
  styleUrls: ['./z-date-picker.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,
  ],
})
export class ZDatePickerComponent {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Input() showTime: boolean = false;
  @Input({ required: true }) control!: FormControl<Date | null>;

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
