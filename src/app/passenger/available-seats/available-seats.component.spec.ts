import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSeatsComponent } from './available-seats.component';

describe('AvailableSeatsComponent', () => {
  let component: AvailableSeatsComponent;
  let fixture: ComponentFixture<AvailableSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableSeatsComponent]
    });
    fixture = TestBed.createComponent(AvailableSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
