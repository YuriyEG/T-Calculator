import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";

const PeriodSelector = ({ selectedPeriod, handleChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Выберите период оплаты</InputLabel>
      <Select
        value={selectedPeriod}
        onChange={(e) => handleChange(e.target.value)}
        label="Выберите период оплаты"
      >
        <MenuItem value="month">Месяц</MenuItem>
        <MenuItem value="year">Год</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PeriodSelector;
