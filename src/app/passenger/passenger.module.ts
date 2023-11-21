import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvailableSeatsComponent } from './available-seats/available-seats.component';
import { SeatsComponent } from './seats/seats.component';



@NgModule({
  declarations: [
    BookFlightComponent,
    AvailableSeatsComponent,
    SeatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PassengerModule { }
