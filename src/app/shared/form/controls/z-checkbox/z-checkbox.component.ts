import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

@Component({
  selector: 'app-z-checkbox',
  standalone: true,
  templateUrl: './z-checkbox.component.html',
  styleUrls: ['./z-checkbox.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule],
})
export class ZCheckboxComponent {
  @Input() label: string = '';
  @Input({ required: true }) control!: FormControl<boolean>;

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
