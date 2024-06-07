import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyDisplayComponent } from './currency-display/currency-display.component';
import { CurrencyDataService } from './services/currency-data.service';


@NgModule({
  declarations: [AppComponent, CurrencyDisplayComponent, CurrencyDataService  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }