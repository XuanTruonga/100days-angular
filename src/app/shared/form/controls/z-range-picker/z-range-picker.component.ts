import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

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
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: [string, string] = ['Từ ngày', 'Đến ngày'];
  @Input() className: string = '';
  @Input() showTime: boolean = false;
  @Input({ required: true }) control!: FormControl<[Date, Date] | null>;

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
