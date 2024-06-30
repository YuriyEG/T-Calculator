import axios from "axios";
import { CurrencyRates } from "../types";

export const getCurrencyRates = async (): Promise<CurrencyRates> => {
  const response = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/RUB"
  );
  const data = response.data;
  return {
    CNY: data.rates.CNY,
    KZT: data.rates.KZT,
  };
};
