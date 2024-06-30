export interface CurrencyRates {
  CNY: number;
  KZT: number;
}

export interface Tariff {
  name: "standard" | "advanced";
  monthly: number;
  yearly: number;
}
