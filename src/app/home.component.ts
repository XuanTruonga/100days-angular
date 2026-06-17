import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from './auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ZInputComponent } from './shared/ng-zorro/z-input/z-input.component.ts';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ReactiveFormsModule, NzFormModule, NzButtonModule, ZInputComponent],
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
          [required]="true"
          [control]="validateForm.controls.username"
          placeholder="Enter your username"
        />

        <app-z-input
          label="Password"
          [required]="true"
          [control]="validateForm.controls.password"
          type="password"
          placeholder="Enter your password"
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

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.auth.logout();
  }

  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true),
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
