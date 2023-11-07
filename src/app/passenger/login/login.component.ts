import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  userEmail: string = ''; 
  userPassword: string = ''; 

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.email.value) {
      this.userEmail = this.email.value;
    }

    this.userPassword = ''; 
    this.authService.login(this.userEmail, this.userPassword).subscribe(
      (response: any) => {
        alert('Login successful');
        this.router.navigate(['/dashboard']); 
      },
      (error: any) => {
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
