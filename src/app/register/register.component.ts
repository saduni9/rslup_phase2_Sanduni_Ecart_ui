import { Component } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';  // Import FormControl
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'register-header',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
}
