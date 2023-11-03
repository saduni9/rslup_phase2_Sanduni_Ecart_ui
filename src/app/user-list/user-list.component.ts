import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  addNewUser() {
    if (this.newUser.name && this.newUser.email) {
      this.userService.addUser(this.newUser);
      this.newUser = { id: 0, name: '', email: '' };
    }
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id);
    }
  }
}

