import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ZDatePickerComponent } from '../../../../shared/form/controls/z-date-picker/z-date-picker.component';
import { ZRangePickerComponent } from '../../../../shared/form/controls/z-range-picker/z-range-picker.component';
import { ZSelectComponent } from '../../../../shared/form/controls/z-select/z-select.component';
import { ZTextAreaComponent } from '../../../../shared/form/controls/z-text-area/z-text-area.component';
import { ZCheckboxComponent } from '../../../../shared/form/controls/z-checkbox/z-checkbox.component';
import { ZRadioComponent } from '../../../../shared/form/controls/z-radio/z-radio.component';
import { AuthService } from '../../../../auth.service';
import { ValidatorsEx } from '../../../../shared/form/validators/index';
import { ZInputComponent } from '../../../../shared/form/controls/z-input/z-input.component';

@Component({
  standalone: true,
  selector: 'app-home-detail',
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
  templateUrl: 'home-detail.component.html',
  styleUrls: ['home-detail.component.scss', '../../styles/home-shared.scss'],
})
export class HomeDetailComponent {
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
