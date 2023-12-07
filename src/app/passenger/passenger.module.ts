import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SeatsComponent } from './seats/seats.component';



@NgModule({
  declarations: [
   SeatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PassengerModule { }
