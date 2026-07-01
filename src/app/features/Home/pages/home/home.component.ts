import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ZInputComponent } from '../../../../shared/form/controls/z-input/z-input.component.js';
import { ZDatePickerComponent } from '../../../../shared/form/controls/z-date-picker/z-date-picker.component.js';
import { ZRangePickerComponent } from '../../../../shared/form/controls/z-range-picker/z-range-picker.component.js';
import { ZSelectComponent } from '../../../../shared/form/controls/z-select/z-select.component.js';
import { ZTextAreaComponent } from '../../../../shared/form/controls/z-text-area/z-text-area.component.js';
import { ZCheckboxComponent } from '../../../../shared/form/controls/z-checkbox/z-checkbox.component.js';
import { ZRadioComponent } from '../../../../shared/form/controls/z-radio/z-radio.component.js';
import { AuthService } from '../../../../auth.service.js';
import { ValidatorsEx } from '../../../../shared/form/validators/index.js';
import { UserFormModalComponent } from '../../modal/modalTest.js';
import { ZButtonComponent } from '../../../../shared/z-button/app-z-button.component.js';
import { DialogService } from '../../../../shared/modal/dialog.service.js';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {
  ZTableColumn,
  ZTableComponent,
} from '../../../../shared/table/app-z-table/app-z-table.component.js';

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
    ZButtonComponent,
    NzGridModule,
    ZTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles/home-shared.scss'],
})
export class HomeComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly auth = inject(AuthService);

  private readonly dialog = inject(DialogService);

  openUserModal(): void {
    const ref = this.dialog.open({
      title: 'Thêm người dùng',
      content: UserFormModalComponent,
    });

    ref.afterClose.subscribe((result) => {
      if (result) {
        // reload list
        // this.loadData();
      }
    });
  }

  openModalCofirm(): void {
    this.dialog.confirm({
      type: 'delete',
      name: '009',
    });
  }

  logout(): void {
    this.auth.logout();
  }

  getPopupContainer = (trigger: HTMLElement): HTMLElement => {
    return trigger.parentElement!;
  };

  validateForm = this.fb.group({
    username: this.fb.control('', [ValidatorsEx.required]),

    username1: this.fb.control('', [ValidatorsEx.required]),

    username2: this.fb.control('', [ValidatorsEx.required]),

    username3: this.fb.control('', [ValidatorsEx.required]),

    // username4: this.fb.control('', [
    //   ValidatorsEx.required,
    //   ValidatorsEx.vietnamPhone(),
    // ]),

    // password: this.fb.control('', [
    //   ValidatorsEx.required,
    //   ValidatorsEx.minLength(6),
    // ]),

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
  listOfData: any[] = [];

  ngOnInit(): void {
    this.listOfData = new Array(20).fill(null).map((_, index) => ({
      id: index + 1,
      name: `Edward King ${index + 1}`,
      age: 20 + index,
      address: `London, Park Lane no. ${index + 1}`,
    }));
  }
  columns = [
    { title: 'Name', key: 'name' },
    { title: 'Age', key: 'age' },
    { title: 'Address', key: 'address' },
  ] satisfies ZTableColumn<any>[];

  onSelectedChange(rows: any[]): void {
    console.log(rows);
  }
}
