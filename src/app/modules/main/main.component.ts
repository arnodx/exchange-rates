import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from "../../core/services/exchange-rates.service";
import {Rates} from "../../core/models/exchange-rates";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  exchangeRates!: Rates[];
  first = 0;
  rows = 10;

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit() {
    this.exchangeRatesService.getExchangeRatesForToday().pipe(
      map(exchangeRate => exchangeRate[0].rates)
    ).subscribe(exchangeRate =>this.exchangeRates=exchangeRate)
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.exchangeRates ? this.first === (this.exchangeRates.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.exchangeRates ? this.first === 0 : true;
  }
}
