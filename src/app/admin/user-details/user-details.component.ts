import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import './user-details.component.scss';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userForm!: FormGroup;
  isNewUser: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    const userId = +this.route.snapshot.paramMap.get('id')! || 0;


    if (userId) {
      
      const user: User = {
        id: userId,
        name: 'John Doe',
        email: 'johndoe@example.com',
      };
      this.isNewUser = false;
      this.userForm.setValue(user);
    }
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      
      const user: User = this.userForm.value;
      
      if (this.isNewUser) {
        
        user.id = Math.floor(Math.random() * 1000); // Temporary ID
      } else {
        
      }
      console.log('User data to save:', user);
      
      this.router.navigate(['/users']);
    } else {
      
    }
  }
}
