import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-currency-display',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currency-display.component.html',
  styleUrl: './currency-display.component.css'
})

export class CurrencyDisplayComponent {
title:string = "Valūtas"; 
 
constructor(private http: HttpClient) {}

getCurrency(cur:string): void {
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
  let httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8000',
    })
  }
  



  this.http.get<any>("http://localhost:8080/getrate/"+cur, httpOptions)
  .subscribe((data: any) => cur = data);


}
}