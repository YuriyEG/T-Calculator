import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { SelectChangeEvent } from "@mui/material";
import {
  setTariff,
  setCurrency,
  setPeriod,
  setRates,
} from "../redux/slices/calculatorSlice";
import { getCurrencyRates } from "../api/currencyApi";
import {
  MenuItem,
  Select,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Tariff, CurrencyRates } from "../types";
import Result from "./Result";

const tariffs: Tariff[] = [
  { name: "standard", monthly: 100, yearly: 1000 },
  { name: "advanced", monthly: 150, yearly: 1400 },
];

const Form = styled.form`
  width: 100%;
`;

const InputsWrapper = styled.div`
  @media screen and (min-width: 420px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 419px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin-right: 20px;
  width: 220px;

  @media screen and (max-width: 419px) {
    &:first-child {
      margin-bottom: 12px;
    }
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  background-color: white;
  height: 36px;
`;

const StyledGroup = styled(RadioGroup)`
  margin-top: 12px;
  margin-bottom: 12px;
`;
const TariffForm: React.FC = () => {
  const dispatch = useDispatch();
  const { tariff, currency, period } = useSelector(
    (state: RootState) => state.calculator
  );

  useEffect(() => {
    const fetchData = async () => {
      const rates: CurrencyRates = await getCurrencyRates();
      dispatch(setRates(rates));
    };
    fetchData();
  }, [dispatch]);

  const handleTariffChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(setTariff(event.target.value as "standard" | "advanced"));
  };

  const handleCurrencyChange = (event: SelectChangeEvent<unknown>) => {
    dispatch(setCurrency(event.target.value as "CNY" | "KZT"));
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPeriod(event.target.value as "monthly" | "yearly"));
  };

  return (
    <Form>
      <InputsWrapper>
        <Wrapper>
          {" "}
          <InputLabel id="tariff-label">Выберите тариф</InputLabel>
          <StyledSelect
            labelId="tariff-label"
            value={tariff}
            onChange={handleTariffChange}
          >
            {tariffs.map((t) => (
              <MenuItem value={t.name} key={t.name}>
                {t.name === "standard" ? "Стандартный" : "Продвинутый"}
              </MenuItem>
            ))}
          </StyledSelect>
        </Wrapper>
        <Wrapper>
          {" "}
          <InputLabel id="currency-label">Выберите валюту</InputLabel>
          <StyledSelect
            labelId="currency-label"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <MenuItem value="CNY">Китайский юань</MenuItem>
            <MenuItem value="KZT">Казахстанский тенге</MenuItem>
          </StyledSelect>
        </Wrapper>
      </InputsWrapper>
      <InputsWrapper></InputsWrapper>
      <StyledGroup value={period} onChange={handlePeriodChange}>
        <FormControlLabel
          value="monthly"
          control={<Radio />}
          label="За месяц"
        />
        <FormControlLabel value="yearly" control={<Radio />} label="За год" />
      </StyledGroup>
      <Result />
    </Form>
  );
};

export default TariffForm;
