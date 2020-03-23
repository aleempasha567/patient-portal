import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBookingComponent } from './checkout-booking.component';

describe('CheckoutBookingComponent', () => {
  let component: CheckoutBookingComponent;
  let fixture: ComponentFixture<CheckoutBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
