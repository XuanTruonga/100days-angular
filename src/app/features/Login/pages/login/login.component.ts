import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../../../../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, NzButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  submit(): void {
    if (this.loading) return;
    this.loading = true;
    this.auth.login(this.username, this.password).then(() => {
      this.loading = false;
      // navigate to home on success
      this.router.navigateByUrl('/home');
    });
  }
}
