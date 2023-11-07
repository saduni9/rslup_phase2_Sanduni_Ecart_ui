import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ResetPasswordResponse {
  message: string; // Define the structure of your response here
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;

      const resetPasswordData = { email };

      this.http.post<ResetPasswordResponse>('RESET_PASSWORD_API_ENDPOINT', resetPasswordData).subscribe(
        (response) => {
          this.successMessage = 'Password reset email sent. Check your email for instructions.';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Email not found. Please check your email address.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please provide a valid email address.';
      this.successMessage = 'Email sent successfully';
    }
  }
}

