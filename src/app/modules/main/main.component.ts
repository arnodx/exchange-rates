import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from "../../core/services/exchange-rates.service";
import {Rates} from "../../core/models/exchange-rates";
import {map} from "rxjs/operators";
import {ThemeService} from "../../core/services/theme-service.service";
import * as moment from "moment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  exchangeRates!: Rates[];
  first = 0;
  rows = 10;
  stateOptions: any[];
  darkTheme: string = 'off';
  dateFilter!:Date;
  constructor(
    private exchangeRatesService: ExchangeRatesService,
    private themeService: ThemeService,
  ) {
    this.stateOptions = [
      { label: 'Ciemny', value: 'md-dark' },
      { label: 'Jasny', value: 'md-light' },
    ];
  }


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

  changeTheme(event:any) {
    this.themeService.switchTheme(event.value);
  }
  filterExchangeRateByDate(date:Date) {
    if(moment(date).isValid()){
      const formatedDate = moment(date).format("YYYY-MM-DD")
      this.exchangeRatesService.getExchangeRatesByDate(formatedDate).pipe(
        map(exchangeRate => exchangeRate[0].rates)
      ).subscribe(exchangeRate =>this.exchangeRates=exchangeRate)
    }
  }

  clearFilterExchangeRate() {
    this.exchangeRatesService.getExchangeRatesForToday().pipe(
      map(exchangeRate => exchangeRate[0].rates)
    ).subscribe(exchangeRate =>this.exchangeRates=exchangeRate)
  }
}
