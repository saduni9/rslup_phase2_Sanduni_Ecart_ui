import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Import the AuthService
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  userEmail: string = ''; // Declare and initialize userEmail
  userPassword: string = ''; // Declare and initialize userPassword

  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService

  login() {
    if (this.email.value) {
      this.userEmail = this.email.value;
    }

    this.userPassword = ''; // You should get the user's password input value

    // Call the login method from the AuthService
    this.authService.login(this.userEmail, this.userPassword).subscribe(
      (response: any) => {
        // Successful login, handle the response as needed
        alert('Login successful');
        this.router.navigate(['/dashboard']); 
      },
      (error: any) => {
        // Handle login failure
        console.error('Login failed:', error);
        
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email address';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
