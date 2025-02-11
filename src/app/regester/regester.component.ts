import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { authnavComponent } from '../auth.nav/authnav.component';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    authnavComponent,
  ],
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss'],
})
export class RegesterComponent {
  isloading: boolean = false;
  isLinear = true;
  data: any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  constructor(
    private _FormBuilder: FormBuilder,
    private _GlobalServiceService: AuthService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.firstFormGroup = this._FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
    this.secondFormGroup = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.thirdFormGroup = this._FormBuilder.group(
      {
        password: [
          '',
          [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
        ],
        rePassword: [
          '',
          [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
        ],
      },
      { validators: [this.coparepassword] as FormControlOptions }
    );
    this.fourthFormGroup = this._FormBuilder.group({
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    });
  }

  handel() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.thirdFormGroup.valid &&
      this.fourthFormGroup.valid
    ) {
      this.isloading = true;
      this._GlobalServiceService
        .regester({
          name: this.firstFormGroup.value.name,
          email: this.secondFormGroup.value.email,
          password: this.thirdFormGroup.value.password,
          rePassword: this.thirdFormGroup.value.rePassword,
          phone: this.fourthFormGroup.value.phone,
        })
        .subscribe({
          next: (response) => {
            if (response.message == 'success') {
              this.isloading = false;

              this._Router.navigate(['/login']);
            }
          },
          error: (err) => {
            this.isloading = false;
            console.log(err);
          },
        });
    } else {
    }
  }

  coparepassword(group: FormGroup): void {
    let password = group.get('password');
    let rePassword = group.get('rePassword');
    if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ match: true });
    }
  }
}
