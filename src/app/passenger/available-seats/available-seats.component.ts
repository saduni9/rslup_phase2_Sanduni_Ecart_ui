// available-seats.component.ts
import { Component, OnInit } from '@angular/core';

// available-seats.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
 // declarations: [AvailableSeatsComponent], // <-- Error: AvailableSeatsComponent is not a module, it's a component
  imports: [CommonModule],
 // exports: [AvailableSeatsComponent], 
})

export class AvailableSeatsComponent implements OnInit {
  availableSeats: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']; // Sample data, replace with actual data

  constructor() {}

  ngOnInit(): void {
    // Initialize component
  }
}