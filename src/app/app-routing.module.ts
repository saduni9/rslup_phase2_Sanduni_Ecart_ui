import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './passenger/home/home.component';
import { HeaderComponent } from './passenger/header/header.component';
import { LoginComponent } from './passenger/login/login.component';
import { RegisterComponent } from './passenger/register/register.component';
import { ForgotPasswordComponent } from './passenger/forgot-password/forgot-password.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
