import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { DetailsComponent } from './details/details.component';
import { AppHttpInterceptorService, DEFAULT_TIMEOUT } from './service/app-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    { provide: DEFAULT_TIMEOUT, useValue: 30000 },
    TransferState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
