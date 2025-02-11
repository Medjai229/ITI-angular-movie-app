import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { authnavComponent } from '../auth.nav/authnav.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    authnavComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _GlobalServiceService: AuthService,
    private _Router: Router
  ) {}

  message = '';
  disabled: false | undefined;
  isloading: boolean = false;
  loginform!: FormGroup;

  ngOnInit(): void {
    this.loginform = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
      ],
    });
  }

  SubmitLogin(): void {
    if (this.loginform.valid == true) {
      this.isloading = true;

      this._GlobalServiceService.setLogin(this.loginform.value).subscribe({
        next: (response) => {
          this.isloading = false;

          if (response.message == 'success') {
            console.log('no');

            localStorage.setItem('etoken', response.token);
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isloading = false;

          this.message = err.error.message;
        },
      });
    } else {
      this.loginform.markAllAsTouched();
    }
  }
}
