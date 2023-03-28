import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RatesTable} from "../models/exchange-rates";
import {Observable} from "rxjs";
import {jsonParamsToHttpService} from "../consts/http.cost";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  private url = 'http://api.nbp.pl/api/exchangerates/tables/A'
  constructor(private http: HttpClient) { }

  getExchangeRatesForToday():Observable<RatesTable[]> {
    const params =jsonParamsToHttpService;
    return this.http.get<RatesTable[]>(`${this.url}/`,{params});
  }
  getExchangeRatesByDate(date:string):Observable<RatesTable[]> {
    const params =jsonParamsToHttpService;
    return this.http.get<RatesTable[]>(`${this.url}/${date}/`,{params})
  }
}
