import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";

const TariffSelector = ({ tariffs, selectedTariff, handleChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Выберите тариф</InputLabel>
      <Select
        value={selectedTariff}
        onChange={(e) => handleChange(e.target.value)}
        label="Выберите тариф"
      >
        {tariffs.map((tariff) => (
          <MenuItem key={tariff.name} value={tariff}>
            {tariff.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TariffSelector;
