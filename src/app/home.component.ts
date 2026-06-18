import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from './auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ZInputComponent } from './shared/form/controls/z-input/z-input.component.ts';
import { ValidatorsEx } from './shared/form/validators';
import { ZDatePickerComponent } from './shared/form/controls/z-date-picker/z-date-picker.component';
import { ZRangePickerComponent } from './shared/form/controls/z-range-picker/z-range-picker.component';
import { ZSelectComponent } from './shared/form/controls/z-select/z-select.component';
import { ZTextAreaComponent } from './shared/form/controls/z-text-area/z-text-area.component';
import { ZCheckboxComponent } from './shared/form/controls/z-checkbox/z-checkbox.component';
import { ZRadioComponent } from './shared/form/controls/z-radio/z-radio.component';

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
  template: `
    <div class="home">
      <h2>Home</h2>
      <form
        nz-form
        [formGroup]="validateForm"
        class="login-form"
        (ngSubmit)="submitForm()"
      >
        <app-z-input
          label="Username"
          placeholder="Enter your username"
          [autoFocus]="true"
          [required]="true"
          [control]="validateForm.controls.username"
        />

        <app-z-input
          label="Password"
          placeholder="Enter your password"
          [required]="true"
          [control]="validateForm.controls.password"
          type="password"
        />

        <app-z-date-picker
          label="Date Picker"
          placeholder="VD: 100.1, 150, 999.99"
          [required]="true"
          [control]="validateForm.controls.positivePriceGt100"
        />

        <app-z-range-picker
          label="Range Picker"
          [required]="true"
          [control]="validateForm.controls.rangePicker"
        />

        <app-z-select
          label="Select"
          [required]="true"
          [control]="validateForm.controls.select"
          [options]="[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
          ]"
        />

        <app-z-text-area
          [control]="validateForm.controls.textArea"
          [required]="true"
          [rows]="5"
        />

        <app-z-checkbox
          [control]="validateForm.controls.checkbox"
          label="Đồng ý điều khoản"
        />

        <app-z-radio
          [control]="validateForm.controls.radio"
          [required]="true"
          label="Chọn"
          [options]="[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
          ]"
        />

        <button nz-button nzType="primary" type="submit">Log in</button>
      </form>
      <button nz-button nzType="primary" (click)="logout()">Logout</button>
    </div>
  `,
  styles: [
    `
      .home {
        max-width: 720px;
        margin: 48px auto;
        padding: 16px;
      }
    `,
  ],
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
