import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({

    providedIn:'root'
})


export class CurrencyDataService{

constructor(private http: HttpClient){}

public getCurrencies(): Observable<any>{
    /* , {headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        'Accept': 'application/json'
      })} */

      
      //const obj = this.http.get("http://localhost:8080/getrate/lt");
      
      //console.log(this.http.get("http://localhost:8080/getrate/lt")); 

      //console.log("no currency-data.service.ts 21 rindas = "+this.http.get("http://localhost:8080/getrate/lt")); 
    return this.http.get("http://localhost:8080/getrate/lt"); 
}

}