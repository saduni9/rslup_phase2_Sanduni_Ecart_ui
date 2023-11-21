import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './passenger/home/home.component';
import { HeaderComponent } from './passenger/header/header.component';
import { LoginComponent } from './passenger/login/login.component';
import { RegisterComponent } from './passenger/register/register.component';
import { ForgotPasswordComponent } from './passenger/forgot-password/forgot-password.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { BookFlightComponent } from './passenger/book-flight/book-flight.component';
import { AvailableSeatsComponent } from './passenger/available-seats/available-seats.component';
import { SeatsComponent } from './passenger/seats/seats.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'user-list', component: UserListComponent },
  {path: 'user-details',component:UserDetailsComponent},
  { path: 'book-flight', component: BookFlightComponent },
  {path: 'available-seats',component:AvailableSeatsComponent},
   {path: 'seats', component:SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
