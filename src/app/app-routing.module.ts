import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutBookingComponent } from './checkout-booking/checkout-booking.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { HomeV1Component } from './home-v1/home-v1.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'patient-profile',
    component: PatientProfileComponent
  },
  {
    path: 'doctor-profile',
    component: DoctorProfileComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'checkout-booking',
    component: CheckoutBookingComponent
  },
  {
    path: 'booking-success',
    component: BookingSuccessComponent
  },
  {
    path: 'home-new',
    component: HomeV1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
