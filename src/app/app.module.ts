import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './passenger/header/header.component';
import { HomeComponent } from './passenger/home/home.component';
import { LoginComponent } from './passenger/login/login.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './passenger/register/register.component';
import { UserService } from './services/user.service';
import { ForgotPasswordComponent } from './passenger/forgot-password/forgot-password.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';  
import { HttpClientModule } from '@angular/common/http';
import { BookFlightComponent } from './passenger/book-flight/book-flight.component';


 

  
 

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserListComponent,
    UserDetailsComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
