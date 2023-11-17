import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss'],
})
export class BookFlightComponent implements OnInit {
  flightForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.flightForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
    });
  }

  bookFlight() {
    // Your book flight logic here
    console.log('Booking the flight...');
  }
}
