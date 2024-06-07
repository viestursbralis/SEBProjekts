import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { HttpClient } from '@angular/common/http'; */
import { CurrencyDisplayComponent } from './currency-display/currency-display.component';
import { CommonModule } from '@angular/common';
import { Currency } from './currency';
import { CurrencyDataService } from './services/currency-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyDisplayComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
public restCurrencyData: any = null; 

  constructor(private http: HttpClient, private currencyDataService:CurrencyDataService) { }
 
  ngOnInit(): void {
    console.log("tiek izsaukta ngOnInit() procedūra"); 
this.currencyDataService.getCurrencies().subscribe(data=>this.restCurrencyData = data); 
 console.log(this.restCurrencyData); 
  }

  
}
