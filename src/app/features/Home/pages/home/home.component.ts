import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ZInputComponent } from '../../../../shared/form/controls/z-input/z-input.component.ts.js';
import { ZDatePickerComponent } from '../../../../shared/form/controls/z-date-picker/z-date-picker.component.js';
import { ZRangePickerComponent } from '../../../../shared/form/controls/z-range-picker/z-range-picker.component.js';
import { ZSelectComponent } from '../../../../shared/form/controls/z-select/z-select.component.js';
import { ZTextAreaComponent } from '../../../../shared/form/controls/z-text-area/z-text-area.component.js';
import { ZCheckboxComponent } from '../../../../shared/form/controls/z-checkbox/z-checkbox.component.js';
import { ZRadioComponent } from '../../../../shared/form/controls/z-radio/z-radio.component.js';
import { AuthService } from '../../../../auth.service.js';
import { ValidatorsEx } from '../../../../shared/form/validators/index.js';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    ZInputComponent,
    ZDatePickerComponent,
    ZRangePickerComponent,
    ZSelectComponent,
    ZTextAreaComponent,
    ZCheckboxComponent,
    ZRadioComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles/home-shared.scss'],
})
export class HomeComponent {
  private fb = inject(NonNullableFormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.auth.logout();
  }

  getPopupContainer = (trigger: HTMLElement): HTMLElement => {
    return trigger.parentElement!;
  };

  validateForm = this.fb.group({
    username: this.fb.control('', [
      ValidatorsEx.required,
      ValidatorsEx.vietnamPhone(),
    ]),

    password: this.fb.control('', [
      ValidatorsEx.required,
      ValidatorsEx.minLength(6),
    ]),

    age: this.fb.control('', [ValidatorsEx.required, ValidatorsEx.integer()]),

    quantity: this.fb.control('', [
      ValidatorsEx.required,
      ValidatorsEx.positiveInteger(),
    ]),

    quantityGt10: this.fb.control('', [
      ValidatorsEx.required,
      ValidatorsEx.positiveInteger(10),
    ]),

    price: this.fb.control('', [ValidatorsEx.required, ValidatorsEx.decimal()]),

    positivePrice: this.fb.control('', [
      ValidatorsEx.required,
      ValidatorsEx.positiveDecimal(20),
    ]),

    positivePriceGt100: this.fb.control(null, [ValidatorsEx.required]),

    rangePicker: this.fb.control(null, [ValidatorsEx.required]),

    select: this.fb.control(null, [ValidatorsEx.required]),

    textArea: this.fb.control('', [ValidatorsEx.required]),

    checkbox: this.fb.control(false, [ValidatorsEx.required]),

    radio: this.fb.control<number | null>(null, [ValidatorsEx.required]),
  });

  submitForm(): void {
    this.validateForm.markAllAsTouched();
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    }
  }
}
