import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutBookingComponent } from './checkout-booking/checkout-booking.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeV1Component } from './home-v1/home-v1.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angular-6-social-login';


// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
  [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("Your-Facebook-app-id")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("779573446326-32or69flak6p7qk32csnibl36kc9optt.apps.googleusercontent.com")
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    BookingComponent,
    CheckoutBookingComponent,
    BookingSuccessComponent,
    HomeV1Component,
    DoctorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
    SocialLoginModule,
    NgbModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
