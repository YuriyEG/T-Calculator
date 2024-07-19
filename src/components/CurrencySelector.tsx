import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";

const CurrencySelector = ({ currencies, selectedCurrency, handleChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Выберите валюту</InputLabel>
      <Select
        value={selectedCurrency}
        onChange={(e) => handleChange(e.target.value)}
        label="Выберите валюту"
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
