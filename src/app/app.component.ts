import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcartProject';
  constructor(private router: Router) {}

  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
