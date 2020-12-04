import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TransferState
  ]
})
export class AppServerModule {}
