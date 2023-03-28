export interface RatesTable {
  table: string
  no: string
  effectiveDate: string
  rates: Rates[]
}

export interface Rates {
  currency: string
  code: string
  mid: number
}
