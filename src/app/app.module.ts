import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './Global/page-not-found/page-not-found.component';
import { BrowserNotSupportedComponent } from './Global/browser-not-supported/browser-not-supported.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BrowserNotSupportedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
