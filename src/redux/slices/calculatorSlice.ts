import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  tariff: "standard" | "advanced";
  currency: "CNY" | "KZT";
  period: "monthly" | "yearly";
  rates: {
    CNY: number;
    KZT: number;
  };
}

const initialState: CalculatorState = {
  tariff: "standard",
  currency: "CNY",
  period: "monthly",
  rates: {
    CNY: 1,
    KZT: 1,
  },
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setTariff(state, action: PayloadAction<"standard" | "advanced">) {
      state.tariff = action.payload;
    },
    setCurrency(state, action: PayloadAction<"CNY" | "KZT">) {
      state.currency = action.payload;
    },
    setPeriod(state, action: PayloadAction<"monthly" | "yearly">) {
      state.period = action.payload;
    },
    setRates(state, action: PayloadAction<{ CNY: number; KZT: number }>) {
      state.rates = action.payload;
    },
  },
});

export const { setTariff, setCurrency, setPeriod, setRates } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
