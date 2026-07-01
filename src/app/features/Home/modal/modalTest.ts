import { Component, inject } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModalLayoutComponent } from "../../../shared/modal/app-modal-layout/app-modal-layout.component";
import { ValidatorsEx } from '../../../shared/form/validators';
import { ZInputComponent } from '../../../shared/form/controls/z-input/z-input.component';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './modalTest.html',
  imports: [ReactiveFormsModule, AppModalLayoutComponent, ZInputComponent],
})
export class UserFormModalComponent {
  private modalRef = inject(NzModalRef);

  loading = false;

  submit(): void {
    this.form.markAllAsTouched();
    // validate + call api
    // this.modalRef.close(true);
  }

  close(): void {
    this.modalRef.close(false);
  }

  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    username: ['',[ValidatorsEx.required]],
    email: ['', [ValidatorsEx.required]],
  });
}
