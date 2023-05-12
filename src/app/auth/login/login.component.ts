import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  showPassword: boolean = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.password?.hasError('invalid')) {
      this.password.setErrors(null);
    }

    if(this.form.valid) {
      this.authService.loginAndGetProfile(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/app']);
        },
        error: (error) => {
          this.form.controls['password'].setErrors({ invalid: true });
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  get email() {
    return this.form.get('email');
  }

  get isEmailInvalid() {
    return this.email?.touched && this.email.invalid
  }

  get password() {
    return this.form.get('password');
  }

  get isPasswordInvalid() {
    return this.password?.touched && this.password.invalid
  }
  
}
