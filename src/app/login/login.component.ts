import { Component } from '@angular/core';
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  login() {
    // Simulate a successful login.
    alert('Login successful');
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email address';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private router: Router) {}
  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }
}

